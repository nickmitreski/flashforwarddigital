-- Create analytics table
CREATE TABLE IF NOT EXISTS analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    visitor_id TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    duration INTEGER NOT NULL,
    scroll_depth INTEGER,
    time_to_first_interaction INTEGER,
    clicked_features TEXT[] DEFAULT '{}',
    page_path TEXT,
    referrer TEXT,
    user_agent TEXT,
    device_type TEXT,
    country TEXT,
    total_interactions INTEGER DEFAULT 0,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_analytics_visitor_id ON analytics(visitor_id);
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_analytics_updated_at
    BEFORE UPDATE ON analytics
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 