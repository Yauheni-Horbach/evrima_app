import React from 'react';
import {Text, View} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useBookmarks} from './useBookmarks';

export const Bookmarks = () => {
  const {bookmarksStore} = useBookmarks();

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Bookmarks</Text>
      {bookmarksStore.data.bookmarksList.map((item, index) => (
        <View key={index}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScreenWrapper>
  );
};
