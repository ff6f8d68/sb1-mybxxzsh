export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      domains: {
        Row: {
          id: string
          created_at: string
          domain: string
          content_hash: string
          owner_id: string
          files: Json[]
        }
        Insert: {
          id?: string
          created_at?: string
          domain: string
          content_hash: string
          owner_id: string
          files: Json[]
        }
        Update: {
          id?: string
          created_at?: string
          domain?: string
          content_hash?: string
          owner_id?: string
          files?: Json[]
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}