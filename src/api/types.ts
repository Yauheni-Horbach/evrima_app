export type RequestResult<T> = Promise<T>;

interface Icon {
  prefix: string;
  suffix: string;
}

interface Category {
  id: number;
  name: string;
  icon: Icon;
}

interface Geocode {
  main: {
    latitude: number;
    longitude: number;
  };
}

interface Hours {
  is_local_holiday: boolean;
  open_now: boolean;
}

interface Location {
  address: string;
  country: string;
  formatted_address: string;
  locality: string;
  postcode: string;
  region: string;
}

interface Photo {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
}

export interface PlaceItem {
  fsq_id: string;
  categories: Category[];
  geocodes: Geocode;
  hours: Hours;
  location: Location;
  name: string;
  photos: Photo[];
  rating: number;
  website: string;
  description?: string;
}
