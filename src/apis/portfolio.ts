import supabase from '../utils/supabase';
import { withCache } from '../utils/cache';

export const getPortfolios = async () => {
  return withCache('portfolio_companies', async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_companies')  
        .select('*')       

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (err: any) {
      console.error('Error fetching portfolio_companies data:', err.message);
      return [];
    }
  });
};