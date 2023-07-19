import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {useAutocompletePlace} from './useAutocompletePlace';

export const AutocompletePlace = ({
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
  const {searchQuery, suggestions, handleSearch, handleSelectSuggestion} =
    useAutocompletePlace({onPressSuggestion, radius, coordinates});

  const renderSuggestion = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSelectSuggestion(item)}>
      <Text>{item.place.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search for a location"
      />
      <FlatList
        data={suggestions}
        renderItem={renderSuggestion}
        keyExtractor={item => item.place.fsq_id}
      />
    </View>
  );
};
