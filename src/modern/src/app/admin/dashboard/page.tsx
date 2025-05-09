import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, hasValidCredentials } from '../../../lib/supabase';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { fetchAnalytics } from '../../../utils/analytics';
import { IconDatabase, IconRefresh, IconAlertTriangle, IconPlugConnected, IconPlugConnectedX } from '@tabler/icons-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

interface VisitData {
  total_visitors: number;
  total_visits: number;
  avg_duration: number;
  avg_scroll_depth: number;
  avg_time_to_interaction: number;
  popular_features: {
    feature: string;
    clicks: number;
  }[];
  recent_visits: {
    timestamp: string;
    duration: number;
  }[];
  traffic_sources: {
    source: string;
    count: number;
  }[];
  device_breakdown: {
    device: string;
    count: number;
  }[];
  top_countries: {
    country: string;
    count: number;
  }[];
  engagement_metrics: {
    total_interactions: number;
    bounce_rate: number;
    return_rate: number;
  };
}

interface SectionStatusProps {
  title: string;
  isLoading: boolean;
  isError: boolean;
  lastUpdated?: Date;
  onRefresh?: () => void;
  dbConnectionStatus?: boolean;
}

const SectionStatus: React.FC<SectionStatusProps> = ({
  title,
  isLoading,
  isError,
  lastUpdated,
  onRefresh,
  dbConnectionStatus
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between mb-2 bg-black/40 p-3 rounded-lg border border-white/5">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          isError ? 'bg-red-500' : 
          isLoading ? 'bg-yellow-500 animate-pulse' : 
          'bg-green-500'
        }`} />
        <span className="text-sm font-medium text-white/80">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        {lastUpdated && (
          <span className="text-xs text-white/50">
            Updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="p-1 hover:bg-white/5 rounded transition-colors disabled:opacity-50"
          >
            <IconRefresh className="w-4 h-4 text-white/70" />
          </button>
        )}
      </div>
    </div>
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
      dbConnectionStatus ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
    }`}>
      {dbConnectionStatus ? (
        <>
          <IconPlugConnected className="w-4 h-4" />
          <span>Connected to database</span>
        </>
      ) : (
        <>
          <IconPlugConnectedX className="w-4 h-4" />
          <span>Database connection failed</span>
        </>
      )}
    </div>
  </div>
);

// Define chart components outside the renderChart function
const BarChart = ({ data, options }: { data: any; options: any }) => <Bar data={data} options={options} />;
const LineChart = ({ data, options }: { data: any; options: any }) => <Line data={data} options={options} />;
const PieChart = ({ data, options }: { data: any; options: any }) => <Pie data={data} options={options} />;
const DoughnutChart = ({ data, options }: { data: any; options: any }) => <Doughnut data={data} options={options} />;

// Add this function to render charts safely
const renderChart = (type: 'bar' | 'line' | 'pie' | 'doughnut', data: any, options: any) => {
  if (!data || !data.labels || !data.datasets) return null;
  
  // Create a proper React component for each chart type
  const ChartWrapper = () => {
    try {
      switch (type) {
        case 'bar':
          return <BarChart data={data} options={options} />;
        case 'line':
          return <LineChart data={data} options={options} />;
        case 'pie':
          return <PieChart data={data} options={options} />;
        case 'doughnut':
          return <DoughnutChart data={data} options={options} />;
        default:
          return null;
      }
    } catch (error) {
      console.error(`Error rendering ${type} chart:`, error);
      return <div className="text-red-500">Error rendering chart</div>;
    }
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      <ChartWrapper />
    </div>
  );
};

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');
  const [visitData, setVisitData] = useState<VisitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [dbConnected, setDbConnected] = useState(false);

  const checkDatabaseConnection = async () => {
    try {
      // First check if we have valid credentials
      if (!hasValidCredentials()) {
        console.error('Missing Supabase credentials');
        setError('Missing database credentials');
        setDbConnected(false);
        return false;
      }

      // Try a simple count query instead of selecting a row
      const { data, error } = await supabase
        .from('analytics')
        .select('count', { count: 'exact', head: true });

      if (error) {
        console.error('Database connection error:', error.message);
        setError(`Database error: ${error.message}`);
        setDbConnected(false);
        return false;
      }

      setDbConnected(true);
      setError(null);
      return true;
    } catch (err) {
      console.error('Connection check error:', err);
      setError(err instanceof Error ? err.message : 'Failed to check database connection');
      setDbConnected(false);
      return false;
    }
  };

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      
      // First check database connection
      const isConnected = await checkDatabaseConnection();
      if (!isConnected) {
        return; // Don't proceed if connection failed
      }

      const { data, error } = await supabase
        .from('analytics')
        .select(`
          id,
          timestamp,
          duration,
          scroll_depth,
          interaction_time,
          feature,
          source,
          device,
          country,
          interactions,
          is_bounce,
          is_return_visit
        `)
        .order('timestamp', { ascending: false });

      if (error) {
        throw error;
      }

      // Process the data
      const processedData: VisitData = {
        total_visitors: new Set(data?.map(item => item.id)).size || 0,
        total_visits: data?.length || 0,
        avg_duration: data?.reduce((acc, curr) => acc + (curr.duration || 0), 0) / (data?.length || 1),
        avg_scroll_depth: data?.reduce((acc, curr) => acc + (curr.scroll_depth || 0), 0) / (data?.length || 1),
        avg_time_to_interaction: data?.reduce((acc, curr) => acc + (curr.interaction_time || 0), 0) / (data?.length || 1),
        popular_features: Object.entries(
          data?.reduce((acc, curr) => {
            if (curr.feature) {
              acc[curr.feature] = (acc[curr.feature] || 0) + 1;
            }
            return acc;
          }, {} as Record<string, number>) || {}
        ).map(([feature, clicks]) => ({ feature, clicks })),
        recent_visits: data?.slice(0, 10).map(visit => ({
          timestamp: visit.timestamp,
          duration: visit.duration || 0
        })) || [],
        traffic_sources: Object.entries(
          data?.reduce((acc, curr) => {
            if (curr.source) {
              acc[curr.source] = (acc[curr.source] || 0) + 1;
            }
            return acc;
          }, {} as Record<string, number>) || {}
        ).map(([source, count]) => ({ source, count })),
        device_breakdown: Object.entries(
          data?.reduce((acc, curr) => {
            if (curr.device) {
              acc[curr.device] = (acc[curr.device] || 0) + 1;
            }
            return acc;
          }, {} as Record<string, number>) || {}
        ).map(([device, count]) => ({ device, count })),
        top_countries: Object.entries(
          data?.reduce((acc, curr) => {
            if (curr.country) {
              acc[curr.country] = (acc[curr.country] || 0) + 1;
            }
            return acc;
          }, {} as Record<string, number>) || {}
        ).map(([country, count]) => ({ country, count })),
        engagement_metrics: {
          total_interactions: data?.reduce((acc, curr) => acc + (curr.interactions || 0), 0) || 0,
          bounce_rate: (data?.filter(item => item.is_bounce).length || 0) / (data?.length || 1) * 100,
          return_rate: (data?.filter(item => item.is_return_visit).length || 0) / (data?.length || 1) * 100
        }
      };

      setVisitData(processedData);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Error fetching analytics:', err);
      setError(err instanceof Error ? err.message : 'Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    loadAnalytics();
    
    // Set up real-time subscription
    const analyticsSubscription = supabase
      .channel('analytics_changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'analytics' 
      }, () => {
        loadAnalytics();
      })
      .subscribe();

    // Check database connection every 30 seconds
    const connectionCheck = setInterval(checkDatabaseConnection, 30000);

    return () => {
      analyticsSubscription.unsubscribe();
      clearInterval(connectionCheck);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/modern');
  };

  const getTabClassName = (tabName: string) => {
    return `px-4 py-2 text-sm transition-colors ${
      activeTab === tabName
        ? 'text-white border-b-2 border-[#008CFF]'
        : 'text-gray-400 hover:text-white'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-black/30 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <IconDatabase className="w-6 h-6 text-[#008CFF]" />
              <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
              {loading && (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#008CFF] border-t-transparent" />
                  <span className="text-sm text-white/50">Syncing...</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/modern')}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg border border-white/10 bg-black/20 hover:bg-black/40"
              >
                Back to Site
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors rounded-lg border border-red-500/10 bg-red-500/5 hover:bg-red-500/10"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('analytics')}
            className={getTabClassName('analytics')}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={getTabClassName('content')}
          >
            Content Management
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={getTabClassName('settings')}
          >
            Settings
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
            <IconAlertTriangle className="w-5 h-5 text-red-400" />
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Overview Section */}
            <div>
              <SectionStatus
                title="Overview Metrics"
                isLoading={loading}
                isError={!!error}
                lastUpdated={lastUpdated || undefined}
                onRefresh={loadAnalytics}
                dbConnectionStatus={dbConnected}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-colors">
                  <h3 className="text-gray-400 text-sm font-medium">Total Visitors</h3>
                  <p className="text-3xl font-bold text-white mt-2">{visitData?.total_visitors || 0}</p>
                  <div className="mt-2 text-xs text-white/50">All time unique visitors</div>
                </div>
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-colors">
                  <h3 className="text-gray-400 text-sm font-medium">Total Visits</h3>
                  <p className="text-3xl font-bold text-white mt-2">{visitData?.total_visits || 0}</p>
                  <div className="mt-2 text-xs text-white/50">Total page views</div>
                </div>
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-colors">
                  <h3 className="text-gray-400 text-sm font-medium">Avg. Duration</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {Math.round(visitData?.avg_duration || 0)}s
                  </p>
                  <div className="mt-2 text-xs text-white/50">Time spent per visit</div>
                </div>
              </div>
            </div>

            {/* Engagement Section */}
            <div>
              <SectionStatus
                title="Engagement Metrics"
                isLoading={loading}
                isError={!!error}
                lastUpdated={lastUpdated || undefined}
                dbConnectionStatus={dbConnected}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Avg. Scroll Depth</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#008CFF] rounded-full" 
                            style={{ width: `${visitData?.avg_scroll_depth || 0}%` }}
                          />
                        </div>
                        <span className="text-sm text-white/70">{Math.round(visitData?.avg_scroll_depth || 0)}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Bounce Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-500 rounded-full" 
                            style={{ width: `${visitData?.engagement_metrics.bounce_rate || 0}%` }}
                          />
                        </div>
                        <span className="text-sm text-white/70">{Math.round(visitData?.engagement_metrics.bounce_rate || 0)}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Return Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${visitData?.engagement_metrics.return_rate || 0}%` }}
                          />
                        </div>
                        <span className="text-sm text-white/70">{Math.round(visitData?.engagement_metrics.return_rate || 0)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Traffic Sources</h3>
                  {visitData?.traffic_sources && visitData.traffic_sources.length > 0 ? (
                    renderChart('pie', {
                      labels: visitData.traffic_sources.map(s => s.source),
                      datasets: [{
                        data: visitData.traffic_sources.map(s => s.count),
                        backgroundColor: [
                          'rgba(0, 140, 255, 0.5)',
                          'rgba(16, 185, 129, 0.5)',
                          'rgba(249, 115, 22, 0.5)',
                          'rgba(139, 92, 246, 0.5)',
                          'rgba(236, 72, 153, 0.5)',
                        ],
                        borderColor: [
                          'rgba(0, 140, 255, 1)',
                          'rgba(16, 185, 129, 1)',
                          'rgba(249, 115, 22, 1)',
                          'rgba(139, 92, 246, 1)',
                          'rgba(236, 72, 153, 1)',
                        ],
                      }]
                    }, {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            padding: 20,
                            font: {
                              size: 12
                            }
                          },
                        },
                      },
                    })
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      No traffic source data available
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Geographic & Device Section */}
            <div>
              <SectionStatus
                title="Geographic & Device Analytics"
                isLoading={loading}
                isError={!!error}
                lastUpdated={lastUpdated || undefined}
                dbConnectionStatus={dbConnected}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Top Countries</h3>
                  <div className="space-y-4">
                    {visitData?.top_countries.map(({ country, count }) => (
                      <div key={country} className="flex items-center justify-between">
                        <span className="text-gray-300">{country}</span>
                        <div className="flex items-center gap-2">
                          <div className="h-2 bg-[#008CFF]/50 rounded-full" 
                               style={{ width: `${(count / (visitData?.total_visits || 1)) * 200}px` }} />
                          <span className="text-sm text-white/70">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Device Types</h3>
                  {visitData?.device_breakdown && visitData.device_breakdown.length > 0 ? (
                    renderChart('doughnut', {
                      labels: visitData.device_breakdown.map(d => d.device),
                      datasets: [{
                        data: visitData.device_breakdown.map(d => d.count),
                        backgroundColor: [
                          'rgba(0, 140, 255, 0.5)',
                          'rgba(16, 185, 129, 0.5)',
                          'rgba(249, 115, 22, 0.5)',
                        ],
                        borderColor: [
                          'rgba(0, 140, 255, 1)',
                          'rgba(16, 185, 129, 1)',
                          'rgba(249, 115, 22, 1)',
                        ],
                      }]
                    }, {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            padding: 20,
                            font: {
                              size: 12
                            }
                          },
                        },
                      },
                    })
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      No device data available
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Popular Features Section */}
            <div>
              <SectionStatus
                title="Feature Analytics"
                isLoading={loading}
                isError={!!error}
                lastUpdated={lastUpdated || undefined}
                dbConnectionStatus={dbConnected}
              />
              <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Popular Features</h3>
                {visitData?.popular_features && visitData.popular_features.length > 0 ? (
                  renderChart('bar', {
                    labels: visitData.popular_features.map(f => f.feature),
                    datasets: [{
                      label: 'Clicks',
                      data: visitData.popular_features.map(f => f.clicks),
                      backgroundColor: 'rgba(0, 140, 255, 0.5)',
                      borderColor: 'rgba(0, 140, 255, 1)',
                      borderWidth: 1,
                    }]
                  }, {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)',
                        },
                        ticks: {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      },
                      x: {
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)',
                        },
                        ticks: {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        labels: {
                          color: 'rgba(255, 255, 255, 0.7)',
                          font: {
                            size: 12
                          }
                        },
                      },
                    },
                  })
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    No feature data available
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <SectionStatus
              title="Content Management"
              isLoading={false}
              isError={false}
              dbConnectionStatus={dbConnected}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <button className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-[1.02] text-left">
                <h3 className="text-lg font-medium text-white">Edit Services</h3>
                <p className="mt-2 text-sm text-gray-400">Update service offerings and descriptions</p>
              </button>
              <button className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-[1.02] text-left">
                <h3 className="text-lg font-medium text-white">Edit Team</h3>
                <p className="mt-2 text-sm text-gray-400">Manage team members and roles</p>
              </button>
              <button className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-[1.02] text-left">
                <h3 className="text-lg font-medium text-white">Edit Blog</h3>
                <p className="mt-2 text-sm text-gray-400">Manage blog posts and categories</p>
              </button>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <SectionStatus
              title="Site Settings"
              isLoading={false}
              isError={false}
              dbConnectionStatus={dbConnected}
            />
            <div className="bg-black/30 backdrop-blur-lg p-6 rounded-[20px] border border-white/10">
              <h3 className="text-lg font-medium text-white mb-6">General Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#008CFF] focus:border-transparent"
                    defaultValue="Flash Forward Digital"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#008CFF] focus:border-transparent"
                    defaultValue="contact@flashforwarddigital.com"
                  />
                </div>
                <button className="px-4 py-2 bg-[#008CFF] text-white rounded-lg hover:bg-[#008CFF]/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 