import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {
  useAddBookmark,
  useBookmarksStore,
  useDeleteBookmark,
} from '@store/bookmarks';
import {useCurrentTravelStore} from '@store/currentTravel';

import {Footer} from './Footer';
import {styles} from './styles';

interface SwipeItemProps {
  address: string;
  name: string;
  rating: number;
  id: string;
  urlPhoto: string;
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
}: SwipeItemProps) => {
  const {data} = useCurrentTravelStore();
  const {data: bookmarksData} = useBookmarksStore();
  const addBookmark = useAddBookmark();
  const deleteBookmark = useDeleteBookmark();

  const onAddToBookmarks = () => {
    const itemInBookmark = bookmarksData.bookmarksList.find(
      item => item.fsq_id === id,
    );

    if (itemInBookmark) {
      deleteBookmark({fsq_id: id});

      return;
    }

    const currentItem = data.placesList.find(item => item.fsq_id === id);

    addBookmark(currentItem);
  };

  const isAddedToBookmarks = React.useMemo(() => {
    return !!bookmarksData.bookmarksList.find(item => item.fsq_id === id);
  }, [bookmarksData.bookmarksList]);

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
