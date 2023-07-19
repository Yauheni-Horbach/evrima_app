import React from 'react';
import {foursquare_options, URL_AUTOCOMPLETE_FOURSQUARE} from '@api/URLList';

export const useAutocompletePlace = ({
  onPressSuggestion,
  radius,
  coordinates,
}: {
  onPressSuggestion: (id: string) => void;
  radius?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const fetchSuggestions = async (query: string) => {
    const url = URL_AUTOCOMPLETE_FOURSQUARE({
      coordinates,
      query,
      radius,
    });

    fetch(url, foursquare_options)
      .then(res => res.json())
      .then(json => {
        setSuggestions(json.results);
      })
      .catch(err => console.error('error:' + err));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      fetchSuggestions(query);
    }
  };

  const handleSelectSuggestion = (suggestion: any) => {
    onPressSuggestion(suggestion.place.fsq_id);
    setSearchQuery('');
    setSuggestions([]);
  };

  return {searchQuery, suggestions, handleSearch, handleSelectSuggestion};
};
