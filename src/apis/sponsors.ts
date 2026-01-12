import supabase from '../utils/supabase';

export const getSponsors = async () => {
  try {
    const { data, error } = await supabase
      .from('sponsors')  
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

export const getPlacement = async () => {
    try {
      const { data, error } = await supabase
        .from('placement')  
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
  