import { createClient } from "@supabase/supabase-js";
import {supabaseUrl, supabaseAnonKey} from "./supabaseClient";
const supabase = createClient("https://<project>.supabase.co", supabaseUrl);

function App() {

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;