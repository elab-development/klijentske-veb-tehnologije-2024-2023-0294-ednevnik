import { supabase } from "./supabaseClients";
import { BlogPost } from "./BlogPost";

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase.from("blogPosts").select("*");

  if (error) {
    console.error("Greška pri učitavanju:", error);
    return [];
  }

  return data.map(
    (bp: any) =>
      new BlogPost(bp.id, bp.imgCode, bp.heading, bp.cardDesc, bp.content)
  );
};
