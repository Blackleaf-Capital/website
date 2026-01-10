import supabase from '../utils/supabase';

export const getTestimonials = async () => {
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
  };