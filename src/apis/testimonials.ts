import supabase from '../utils/supabase';
import { withCache } from '../utils/cache';

export const getTestimonials = async () => {
  return withCache('testimonials', async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')  
        .select('*')       

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (err: any) {
      console.error('Error fetching homepage data:', err.message);
      return [];
    }
  });
};