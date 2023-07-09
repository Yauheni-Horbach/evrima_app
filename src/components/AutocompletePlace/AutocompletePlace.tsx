import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {useAutocompletePlace} from './useAutocompletePlace';

export const AutocompletePlace = ({
  onPressSuggestion,
}: {
  onPressSuggestion: (id: string) => void;
}) => {
  const {searchQuery, suggestions, handleSearch, handleSelectSuggestion} =
    useAutocompletePlace({onPressSuggestion});

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
