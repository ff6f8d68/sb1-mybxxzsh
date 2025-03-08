import { z } from 'zod';
import { supabase } from '../lib/supabase';

const RegisterSchema = z.object({
  domain: z.string()
    .min(3)
    .max(63)
    .regex(/^[a-z0-9-]+$/, 'Domain can only contain lowercase letters, numbers, and hyphens')
    .refine(domain => !domain.startsWith('-') && !domain.endsWith('-'), 
      'Domain cannot start or end with a hyphen'),
  files: z.array(z.object({
    path: z.string(),
    content: z.string(),
    type: z.string()
  }))
});

export type RegisterRequest = z.infer<typeof RegisterSchema>;

export async function registerDomain({ domain, files }: RegisterRequest) {
  try {
    // Validate input
    RegisterSchema.parse({ domain, files });

    // Check if user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      throw new Error('Authentication required');
    }

    // Check if domain is available
    const { data: existingDomain } = await supabase
      .from('domains')
      .select('domain')
      .eq('domain', domain)
      .single();

    if (existingDomain) {
      throw new Error('Domain already registered');
    }

    // Create content hash from files
    const contentHash = await createContentHash(files);

    // Store domain and files
    const { data, error } = await supabase
      .from('domains')
      .insert({
        domain,
        content_hash: contentHash,
        owner_id: user.id,
        files
      })
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      data: {
        domain,
        contentHash,
        files: files.map(f => f.path)
      }
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

async function createContentHash(files: RegisterRequest['files']): Promise<string> {
  // Create a deterministic string from all files
  const content = files
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(f => `${f.path}:${f.content}`)
    .join('|');

  // Create hash using Web Crypto API
  const msgBuffer = new TextEncoder().encode(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}