import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {PlaceItem} from '@api/types';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useBookmarks} from './useBookmarks';

const BookmarkItem = ({
  item,
  onOpenItemDetails,
}: {
  item: PlaceItem;
  onOpenItemDetails: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onOpenItemDetails}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export const Bookmarks = () => {
  const {bookmarksStore, onOpenItemDetails} = useBookmarks();

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Bookmarks</Text>
      {bookmarksStore.data.bookmarksList.map(item => (
        <BookmarkItem
          key={item.fsq_id}
          item={item}
          onOpenItemDetails={onOpenItemDetails(item.fsq_id)}
        />
      ))}
    </ScreenWrapper>
  );
};
