import supabase from '../utils/supabase';

export const getEvents= async () => {
  try {
    const { data, error } = await supabase
      .from('events')  
      .select('*')       
      .order('date', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err: any) {
    console.error('Error fetching homepage data:', err.message);
    return [];
  }
};

export const getEventByName = async (name: string) => {
    console.log(name);
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('title', name)  // or use 'id' if you prefer
  
      if (error) {
        throw new Error(error.message);
      }
  
      return data;
    } catch (err: any) {
      console.error('Error fetching event:', err.message);
      return null;
    }
  };