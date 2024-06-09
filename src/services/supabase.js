import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rlbvqxudzsssmywcnfrk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsYnZxeHVkenNzc215d2NuZnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjE2OTAsImV4cCI6MjAzMjgzNzY5MH0.SxAU2oUEcJs0nsyv8-W_CjdhfsBmCOHxQI3cK-scDFU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
