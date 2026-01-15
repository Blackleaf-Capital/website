import supabase from '../utils/supabase';
import { withCache } from '../utils/cache';

export const getLandingPage = async () => {
  return withCache('landing-page', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('id', 1) 

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

export const getEventsImages = async () => {
  return withCache('events-images', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .neq('title', null) 

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

export const getGroupPhoto = async () => {
  return withCache('group-photo', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('name', 'Group') 

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

export const getTeamPhoto = async () => {
  return withCache('team-photo', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('name', 'Team') 

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

export const getJoinPhoto = async () => {
  return withCache('join-photo', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('name', 'Join') 

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

export const getSponsorPhoto = async () => {
  return withCache('sponsor-photo', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('name', 'Sponsors') 

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

export const getCtaPhoto = async () => {
  return withCache('cta-photo', async () => {
    try {
      const { data, error } = await supabase
        .from('images')  
        .select('*')       
        .eq('name', 'CTA') 

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