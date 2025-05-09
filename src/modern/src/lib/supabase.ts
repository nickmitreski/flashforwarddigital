import { createClient } from '@supabase/supabase-js';

// Default values for development - DO NOT use in production
const DEFAULT_SUPABASE_URL = 'https://rrknsktciaywgqtkrzme.supabase.co';
const DEFAULT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJya25za3RjaWF5d2dxdGtyem1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzgyODEsImV4cCI6MjA2MTE1NDI4MX0.RT3OqeXZcxG8ArVc-CR7VSn3Jhu0C-Enk1Hlmq0EpDQ';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    VITE_SUPABASE_URL: supabaseUrl,
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? '[HIDDEN]' : undefined
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
});

// Export a function to check if we have valid credentials
export const hasValidCredentials = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
}; 