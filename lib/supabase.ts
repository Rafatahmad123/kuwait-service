import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jltrrmwixwbxtduguizv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsdHJybXdpeHdieHRkdWd1aXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5MDcwNTQsImV4cCI6MjA4MjQ4MzA1NH0.5mjh1Upm05V-uFlmbbb-wOoJFuvs4E2oMzl7agdu0yY";

let client: SupabaseClient | null = null;

export const getSupabaseClient = () => {
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
      global: {
        headers: {
          "x-application-name": "kuwait-service",
        },
      },
    });
  }

  return client;
};

export type DatabaseClient = SupabaseClient;
