import { createClient } from "@supabase/supabase-js"

export const supabase = createClient("https://bqjsrtmmjgxdikfzrnol.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxanNydG1tamd4ZGlrZnpybm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNjU3MzcsImV4cCI6MjAwNDk0MTczN30.kSY8jMesjUAH0zz-GLWPKMxeeomJmtcUZQGmmgWYVw0")