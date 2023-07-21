import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import type {PlaceItem} from '@api/types';
import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';

import {Footer} from './Footer';
import {styles} from './styles';

interface SwipeItemProps {
  address: string;
  name: string;
  rating: number;
  id: string;
  urlPhoto: string;
  listItems: PlaceItem[];
  onOpenSwipeItemDetails: () => void;
  onChangeState: (state: 'dislike' | 'like') => void;
}

export const SwipeItem = ({
  address,
  name,
  rating,
  id,
  urlPhoto,
  onOpenSwipeItemDetails,
  onChangeState,
  listItems,
}: SwipeItemProps) => {
  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id,
    data: listItems,
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>name-{name}</Text>
        <Text>address-{address}</Text>
        <Text>rating-{rating}</Text>
        <View style={styles.imageContainer}>
          {urlPhoto && <Image source={{uri: urlPhoto}} style={styles.image} />}
        </View>
        <Button title="Open Details" onPress={onOpenSwipeItemDetails} />
      </View>
      <Footer
        isAddedToBookmarks={isAddedToBookmarks}
        onChangeState={onChangeState}
        onAddToBookmarks={onAddToBookmarks}
      />
    </View>
  );
};
