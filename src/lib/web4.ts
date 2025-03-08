import { supabase } from './supabase';

export interface Web4File {
  path: string;
  content: string;
  type: string;
}

export interface Web4Site {
  domain: string;
  files: Web4File[];
  contentHash: string;
}

export async function getWeb4Site(domain: string): Promise<Web4Site | null> {
  try {
    const { data, error } = await supabase
      .from('domains')
      .select('*')
      .eq('domain', domain)
      .single();

    if (error || !data) return null;

    return {
      domain: data.domain,
      files: data.files as Web4File[],
      contentHash: data.content_hash
    };
  } catch {
    return null;
  }
}

export function isWeb4Domain(hostname: string): boolean {
  return hostname.endsWith('.web4') || hostname.endsWith('.everything') || hostname.endsWith('.future');
}

export function getWeb4Path(url: URL): string {
  return url.pathname || '/index.html';
}