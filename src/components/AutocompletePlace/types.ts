interface Highlight {
  start: number;
  length: number;
}

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

interface Location {
  address: string;
  country: string;
  cross_street: string;
  formatted_address: string;
  locality: string;
  postcode: string;
  region: string;
}

interface Place {
  fsq_id: string;
  categories: Category[];
  distance: number;
  geocodes: Geocode;
  location: Location;
  name: string;
}

interface Text {
  primary: string;
  secondary: string;
  highlight: Highlight[];
}

export interface AutocompletePlaceItem {
  type: string;
  text: Text;
  link: string;
  place: Place;
}
