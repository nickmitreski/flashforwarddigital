-- First, drop the existing table if it exists
DROP TABLE IF EXISTS analytics;

-- Create the analytics table with the correct structure
CREATE TABLE analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    duration INTEGER,
    scroll_depth FLOAT,
    interaction_time INTEGER,
    feature VARCHAR,
    source VARCHAR,
    device VARCHAR,
    country VARCHAR,
    interactions INTEGER,
    is_bounce BOOLEAN DEFAULT false,
    is_return_visit BOOLEAN DEFAULT false
);

-- Create an index on timestamp for better query performance
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);

-- Insert sample data
INSERT INTO analytics (
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
) VALUES 
    (120, 75.5, 3, 'homepage', 'direct', 'desktop', 'US', 5, false, true),
    (45, 25.0, 10, 'services', 'google', 'mobile', 'UK', 1, true, false),
    (300, 100.0, 1, 'contact', 'referral', 'tablet', 'CA', 8, false, false);

-- Grant necessary permissions
GRANT ALL ON analytics TO authenticated;
GRANT ALL ON analytics TO anon;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated; 