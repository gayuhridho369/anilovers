export interface AnimeResponse {
  Page: {
    media: Anime[];
  };
}

export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string | null;
    native: string;
  };
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string;
  popularity: number;
  averageScore: number;
  genres: string[];
}

export interface AnimeDetailResponse {
  Media: AnimeDetail;
}

export interface AnimeDetail {
  id: number;
  title: {
    romaji: string;
    english: string | null;
    native: string;
  };
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string;
  popularity: number;
  averageScore: number;
  genres: string[];
  episodes: number;
  characters: {
    nodes: Array<{
      name: {
        full: string;
        native: string;
      };
      image: {
        medium: string;
      };
    }>;
  };
}
