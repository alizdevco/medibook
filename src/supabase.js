import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fihllckwnzielkuxozxq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpaGxsY2t3bnppZWxrdXhvenhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NTIwNTIsImV4cCI6MjA5OTIyODA1Mn0.-GWqjGPYMY2n8gkucBPBWwNl_eO6rYBTPf4lLOl2JBQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
