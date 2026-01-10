import supabase from '../utils/supabase';

export const getMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('members')  
        .select()  
        .is('Category',null)       
  
      if (error) {
        throw new Error(error.message);
      }
  
      return data;
    } catch (err: any) {
      console.error('Error fetching homepage data:', err.message);
      return [];
    }
  };

  export const getExecMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('members')  
        .select('*')
        .eq('Category','Executive')       
  
      if (error) {
        throw new Error(error.message);
      } 
      
      return data;
    } catch (err: any) {
      console.error('Error fetching homepage data:', err.message);
      return [];
    }
  };

  export const getPastExecs = async () => {
    try {
      const { data, error } = await supabase
        .from('past_executives')
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