import supabase from '../utils/supabase';

export const getLandingPage = async () => {
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
};


export const getEventsImages = async () => {
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
  };

export const getGroupPhoto = async () => {
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
};

export const getTeamPhoto = async () => {
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
};


export const getJoinPhoto = async () => {
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
};

export const getSponsorPhoto = async () => {
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
};

export const getCtaPhoto = async () => {
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
};