import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { analytics } from '@/lib/analytics';

export default function AnalyticsTransition() {
  const navigate = useNavigate();
  const [sessionDuration, setSessionDuration] = useState(analytics.getSessionDuration());
  const [totalClicks, setTotalClicks] = useState(analytics.getTotalClicks());

  useEffect(() => {
    // Update session duration every second
    const timer = setInterval(() => {
      setSessionDuration(analytics.getSessionDuration());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleContinue = () => {
    navigate('/modern');
  };

  return (
    <div className="h-screen bg-[#0A0A0F] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl w-full mx-4">
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Personal Stats */}
          <div className="col-span-5 flex flex-col gap-[22px]">
            {/* Time Spent Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0D1117] rounded-xl p-5"
              style={{ border: '2px solid #F59E0B' }}
            >
              <h2 className="text-2xl font-bold text-[#F59E0B] mb-2">Time Spent</h2>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-8xl font-bold text-[#F59E0B] mb-2">{sessionDuration}</div>
                <p className="text-gray-500">Session Duration</p>
              </div>
            </motion.div>

            {/* Total Clicks Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0D1117] rounded-xl p-5"
              style={{ border: '2px solid #EC4899' }}
            >
              <h2 className="text-2xl font-bold text-[#EC4899] mb-2">Total Interactions</h2>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-8xl font-bold text-[#EC4899] mb-2">{totalClicks}</div>
                <p className="text-gray-500">Total Clicks</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-span-7 flex flex-col justify-between gap-[22px]">
            {/* Time Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-4"
            >
              <h2 className="text-lg font-light text-[#4A9DFF] mb-3">Time Impact on Engagement</h2>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-light text-white mb-1">2.4x</div>
                  <p className="text-sm text-gray-400">Higher conversion rate after 2+ minute sessions</p>
                  <div className="text-xs text-gray-600 mt-1">HubSpot, 2023</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">73%</div>
                  <p className="text-sm text-gray-400">Better brand recall with longer sessions</p>
                  <div className="text-xs text-gray-600 mt-1">Nielsen Research</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">87%</div>
                  <p className="text-sm text-gray-400">Return rate for 3min+ sessions</p>
                  <div className="text-xs text-gray-600 mt-1">Google Analytics</div>
                </div>
              </div>
            </motion.div>

            {/* Interaction Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-4"
            >
              <h2 className="text-lg font-light text-[#A855F7] mb-3">Value of User Interactions</h2>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-light text-white mb-1">5.2x</div>
                  <p className="text-sm text-gray-400">Conversion rate after 4+ clicks</p>
                  <div className="text-xs text-gray-600 mt-1">Forrester Research</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">91%</div>
                  <p className="text-sm text-gray-400">Users engage more with 3+ clicks</p>
                  <div className="text-xs text-gray-600 mt-1">UX Design Institute</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">3.8x</div>
                  <p className="text-sm text-gray-400">Share rate with high interaction</p>
                  <div className="text-xs text-gray-600 mt-1">ShareThis Analytics</div>
                </div>
              </div>
            </motion.div>

            {/* SEO Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-4"
            >
              <h2 className="text-lg font-light text-[#22C55E] mb-3">SEO & Ranking Impact</h2>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-light text-white mb-1">45%</div>
                  <p className="text-sm text-gray-400">SEO boost from 2min+ sessions</p>
                  <div className="text-xs text-gray-600 mt-1">SEMrush Study</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">67%</div>
                  <p className="text-sm text-gray-400">Lower bounce rate with 3+ clicks</p>
                  <div className="text-xs text-gray-600 mt-1">Moz Analytics</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-1">2.1x</div>
                  <p className="text-sm text-gray-400">Traffic growth from engagement</p>
                  <div className="text-xs text-gray-600 mt-1">Ahrefs Research</div>
                </div>
              </div>
            </motion.div>

            {/* Continue Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <button
                onClick={handleContinue}
                className="w-full py-3 bg-[#4A9DFF] hover:bg-[#3182CE] rounded-xl text-white transition-all duration-300 transform hover:scale-[1.02]"
              >
                Continue
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 