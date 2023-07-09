import {GOOGLE_MAPS_KEY} from '@env';

export const URL_PLACE_DETAILS = (placeId: string) =>
  `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAPS_KEY}&place_id=${placeId}`;

export const URL_PLACE_PHOTO = (photo: string) =>
  `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo}&key=${GOOGLE_MAPS_KEY}&maxwidth=800`;

export const URL_PLACE_TEXT_SEARCH = ({
  type,
  query,
}: {
  type: string;
  query: string;
}) =>
  `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${GOOGLE_MAPS_KEY}&query=${query}&radius=2000&type=${type}`;

export const URL_PLACES_SEARCH_FOURSQUARE = ({
  coordinates,
  radius = 2000,
  categories,
  fields,
  limit = 50,
}: {
  coordinates: {
    lat: number;
    lng: number;
  };
  radius?: number;
  categories: number[];
  fields: string[];
  limit?: number;
}) =>
  `https://api.foursquare.com/v3/places/search?ll=${coordinates.lat},${
    coordinates.lng
  }&radius=${radius}&categories=${categories.join(',')}&fields=${fields.join(
    ',',
  )}&limit=${limit}&sort=RATING`;
