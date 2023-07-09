import React from 'react';
import {foursquare_options, URL_AUTOCOMPLETE_FOURSQUARE} from '@api/URLList';
import {useCurrentTravelStore} from '@store/currentTravel';

export const useAutocompletePlace = ({
  onPressSuggestion,
}: {
  onPressSuggestion: (id: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const {data} = useCurrentTravelStore();

  const fetchSuggestions = async (query: string) => {
    const url = URL_AUTOCOMPLETE_FOURSQUARE({
      coordinates: data.coordinates,
      query,
      radius: data.radius,
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
