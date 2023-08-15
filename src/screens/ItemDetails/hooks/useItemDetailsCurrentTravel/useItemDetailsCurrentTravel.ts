import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation} from '@react-navigation/native';
import {
  useAddPlaceToViewedListWithPlaceState,
  useCurrentTravelStore,
} from '@store/currentTravel';
import {useUserStore} from '@store/user';

export const useItemDetailsCurrentTravel = (id: string) => {
  const navigation = useNavigation();

  const addPlaceToViewedListWithPlaceState =
    useAddPlaceToViewedListWithPlaceState();
  const {data: currentTravelData} = useCurrentTravelStore();
  const {data: userData} = useUserStore();

  const currentListData = [
    ...currentTravelData.placesList,
    ...currentTravelData.likeList,
  ];

  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id,
    data: currentListData,
  });

  const placeInfo = currentListData.find(item => item.fsq_id === id);
  const photos = (placeInfo?.photos ?? []).map(item => photoURLGenerator(item));

  const onPressChangeState = (event: 'like' | 'dislike') => {
    addPlaceToViewedListWithPlaceState(userData.id, {
      placeItem: currentTravelData.placesList.find(item => item.fsq_id === id)!,
      event,
      currentTravelId: currentTravelData.id,
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
