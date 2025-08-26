import { supabase } from "./supabaseClients";

export async function logoutUser() {
  await supabase.auth.signOut();
}
