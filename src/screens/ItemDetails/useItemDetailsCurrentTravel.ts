import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation} from '@react-navigation/native';
import {
  useAddPlaceToViewedListWithPlaceState,
  useCurrentTravelStore,
} from '@store/currentTravel';

export const useItemDetailsCurrentTravel = (id: string) => {
  const navigation = useNavigation();

  const addPlaceToViewedListWithPlaceState =
    useAddPlaceToViewedListWithPlaceState();
  const {data} = useCurrentTravelStore();

  const currentListData = [...data.placesList, ...data.likeList];

  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id,
    data: currentListData,
  });

  const placeInfo = currentListData.find(item => item.fsq_id === id);
  const photos = (placeInfo?.photos || []).map((item: any) =>
    photoURLGenerator(item),
  );

  const onPressChangeState = (event: 'like' | 'dislike') => {
    addPlaceToViewedListWithPlaceState({
      place: data.placesList.find(item => item.fsq_id === id),
      placeState: event,
    });

    navigation.goBack();
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return {
    onPressChangeState,
    isAddedToBookmarks,
    onAddToBookmarks,
    placeInfo,
    photos,
    onGoBack,
  };
};
