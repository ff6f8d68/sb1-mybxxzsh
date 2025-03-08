/*
  # Create domains table for Web4 DNS system

  1. New Tables
    - `domains`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `domain` (text, unique) - The Web4 domain name
      - `content_hash` (text) - Hash of the website content on the blockchain
      - `owner_id` (uuid) - Reference to the user who owns the domain
      - `files` (jsonb) - Array of website files and their content

  2. Security
    - Enable RLS on `domains` table
    - Add policies for:
      - Anyone can read domains
      - Only authenticated users can create domains
      - Only domain owners can update their domains
*/

CREATE TABLE IF NOT EXISTS domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  domain text UNIQUE NOT NULL,
  content_hash text NOT NULL,
  owner_id uuid NOT NULL REFERENCES auth.users(id),
  files jsonb NOT NULL DEFAULT '[]'::jsonb
);

ALTER TABLE domains ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read domains (public DNS lookup)
CREATE POLICY "Anyone can read domains"
  ON domains
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to create domains
CREATE POLICY "Authenticated users can create domains"
  ON domains
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow domain owners to update their domains
CREATE POLICY "Users can update own domains"
  ON domains
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);