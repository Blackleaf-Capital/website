import supabase from '../utils/supabase';
import { withCache } from '../utils/cache';

export interface NetworkCounts {
  totalMembers: number;
  corporatePartners: number;
  universities: number;
  events: number;
  placements: number;
}

export const getNetworkCounts = async (): Promise<NetworkCounts> => {
  return withCache('network-counts', async () => {
    try {
      // Get total members count (including executives)
      const { count: membersCount, error: membersError } = await supabase
        .from('members')
        .select('*', { count: 'exact', head: true });

      if (membersError) {
        console.error('Error fetching members count:', membersError.message);
      }

      // Get corporate partners count
      const { count: sponsorsCount, error: sponsorsError } = await supabase
        .from('sponsors')
        .select('*', { count: 'exact', head: true });

      if (sponsorsError) {
        console.error('Error fetching sponsors count:', sponsorsError.message);
      }

      // Get unique universities count
      const { data: universitiesData, error: universitiesError } = await supabase
        .from('members')
        .select('School')
        .not('School', 'is', null);

      if (universitiesError) {
        console.error('Error fetching universities:', universitiesError.message);
      }

      const uniqueUniversities = universitiesData 
        ? new Set(universitiesData.map(item => item.School)).size 
        : 0;

      // Get events count
      const { count: eventsCount, error: eventsError } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true });

      if (eventsError) {
        console.error('Error fetching events count:', eventsError.message);
      }

      // Get placements count
      const { count: placementsCount, error: placementsError } = await supabase
        .from('placement')
        .select('*', { count: 'exact', head: true });

      if (placementsError) {
        console.error('Error fetching placements count:', placementsError.message);
      }

      return {
        totalMembers: membersCount || 0,
        corporatePartners: sponsorsCount || 0,
        universities: uniqueUniversities,
        events: eventsCount || 0,
        placements: placementsCount || 0
      };
    } catch (err: any) {
      console.error('Error fetching network counts:', err.message);
      return {
        totalMembers: 0,
        corporatePartners: 0,
        universities: 0,
        events: 0,
        placements: 0
      };
    }
  }, 10 * 60 * 1000); // Cache for 10 minutes since counts don't change frequently
};