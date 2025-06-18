export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  style: string;
  imageUrl: string;
  description: string;
  price: number;
  dimensions: string;
  isAvailable: boolean;
}

export type FilterType = 'all' | 'painting' | 'photography' | 'sculpture' | 'digital';
export type StyleType = 'all' | 'abstract' | 'contemporary' | 'classical' | 'modern';