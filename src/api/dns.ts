import { supabase } from '../lib/supabase';

export async function getDNSRecords() {
  try {
    const { data, error } = await supabase
      .from('domains')
      .select('domain, content_hash')
      .order('created_at', { ascending: true });

    if (error) throw error;

    return {
      success: true,
      data: data.reduce((acc, { domain, content_hash }) => ({
        ...acc,
        [domain]: content_hash
      }), {})
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}