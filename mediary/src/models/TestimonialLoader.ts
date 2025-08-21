import { supabase } from "./supabaseClients";
import { Testimonial } from "./Testimonial";

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase.from("testimonials").select("*");

  // console.log("Data:", data);
  // console.log("Error:", error);

  if (error) {
    console.error("Greška pri učitavanju:", error);
    return [];
  }

  return data.map(
    (t: any) => new Testimonial(t.id, t.imgCode, t.fullName, t.desc)
  );
};
