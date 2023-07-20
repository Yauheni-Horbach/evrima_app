import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation} from '@react-navigation/native';
import {useSearchStore} from '@store/search';

export const useItemDetailsSearch = (id: string) => {
  const navigation = useNavigation();

  const {data} = useSearchStore();

  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id,
    data: [data.currentSearchResultProduct],
  });

  const placeInfo = data.currentSearchResultProduct;
  const photos = (placeInfo?.photos || []).map((item: any) =>
    photoURLGenerator(item),
  );

  const onGoBack = () => {
    navigation.goBack();
  };

  return {
    isAddedToBookmarks,
    onAddToBookmarks,
    placeInfo,
    photos,
    onGoBack,
  };
};
