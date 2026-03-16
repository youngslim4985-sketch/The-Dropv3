import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  name: string;
  membership_tier: 'Silver' | 'Gold' | 'Platinum';
  created_at: string;
};

export type Wine = {
  id: string;
  name: string;
  producer: string;
  vintage: number;
  region: string;
  country: string;
  grape_variety: string;
  description: string;
  image_url: string;
  drink_start_year: number;
  drink_peak_year: number;
  drink_end_year: number;
};

export type CellarInventory = {
  id: string;
  user_id: string;
  wine_id: string;
  quantity: number;
  purchase_date: string;
  status: 'aging' | 'peak' | 'drink';
  wine?: Wine;
};

export type TastingNote = {
  id: string;
  user_id: string;
  wine_id: string;
  acidity_score: number;
  tannin_score: number;
  body_score: number;
  fruit_score: number;
  earth_score: number;
  oak_score: number;
  notes: string;
  created_at: string;
};

export type Drop = {
  id: string;
  wine_id: string;
  drop_name: string;
  total_bottles: number;
  price: number;
  start_time: string;
  end_time: string;
  status: 'upcoming' | 'active' | 'sold_out';
  wine?: Wine;
};

export type Artist = {
  id: string;
  name: string;
  discipline: string;
  bio: string;
  profile_image: string;
};

export type Artwork = {
  id: string;
  artist_id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
};

export type LivestreamEvent = {
  id: string;
  title: string;
  artist_id: string;
  event_type: string;
  start_time: string;
  description: string;
  stream_url: string;
  artist?: Artist;
};

export type CommunityPost = {
  id: string;
  user_id: string;
  content: string;
  media_url?: string;
  created_at: string;
  user?: Profile;
};
