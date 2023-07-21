import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation} from '@react-navigation/native';
import {useBookmarksStore} from '@store/bookmarks';

export const useItemDetailsBookmarks = (id: string) => {
  const navigation = useNavigation();

  const {data} = useBookmarksStore();

  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id,
    data: data.bookmarksList,
  });

  const placeInfo = data.bookmarksList.find(item => item.fsq_id === id);
  const photos = (placeInfo?.photos ?? []).map(item => photoURLGenerator(item));

  const onGoBack = () => {
    navigation.goBack();
  };

  const onAddToBookmarksPress = () => {
    if (isAddedToBookmarks) {
      navigation.goBack();
    }
    onAddToBookmarks();
  };

  return {
    isAddedToBookmarks,
    onAddToBookmarks: onAddToBookmarksPress,
    placeInfo,
    photos,
    onGoBack,
  };
};
