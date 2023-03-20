import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://obwxqnbxzlrhsrnkfskj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id3hxbmJ4emxyaHNybmtmc2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkxNTg2MjUsImV4cCI6MTk5NDczNDYyNX0.OF8oEaGNGr7nW0L75jKLPsGpofx77cxN9-E4nrkBC5I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
