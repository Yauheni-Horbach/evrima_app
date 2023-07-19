import React from 'react';
import {Text} from 'react-native';
import {AutocompletePlace} from '@components/AutocompletePlace';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {useSearch} from './useSearch';

export const Search = () => {
  const {onOpenSwipeItemDetails} = useSearch();

  return (
    <ScreenWrapper>
      <Text>Search</Text>
      <AutocompletePlace onPressSuggestion={onOpenSwipeItemDetails} />
    </ScreenWrapper>
  );
};
