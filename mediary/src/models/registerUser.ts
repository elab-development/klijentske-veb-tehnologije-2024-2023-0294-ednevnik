import { supabase } from "./supabaseClients";

export async function registerUser(
  email: string,
  password: string,
  name: string,
  surname: string
) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  const userId = authData.user?.id;

  if (userId) {
    const { error: dbError } = await supabase
      .from("users")
      .insert([{ id: userId, email, name: name, surname: surname }]);
    if (dbError) throw dbError;
  }

  return authData;
}
