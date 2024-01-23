import { createClient } from "@supabase/supabase-js";
console.log(process.env);
const supabaseUrl = "https://kcvmirwpcremaoizgtaj.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
