import React from 'react';
import {Text} from 'react-native';
import {AutocompletePlace} from '@components/AutocompletePlace';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {useSearchCurrentTravel} from './useSearchCurrentTravel';

export const SearchCurrentTravel = () => {
  const {onOpenSwipeItemDetails} = useSearchCurrentTravel();
  return (
    <ScreenWrapper>
      <Text>Search</Text>
      <AutocompletePlace onPressSuggestion={onOpenSwipeItemDetails} />
    </ScreenWrapper>
  );
};
