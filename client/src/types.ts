export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover?: string;
}

export interface Photo {
  id: string;
  url: string;
  caption?: string;
}

export interface Note {
  id: string;
  text: string;
  color: string;
  icon?: string;
}

export type ViewState = 'LOGIN' | 'DASHBOARD';
