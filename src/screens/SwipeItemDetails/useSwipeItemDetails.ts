import {useAddBookmarkButton} from '@hooks/AddBookmarkButton';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  useAddPlaceToViewedListWithPlaceState,
  useCurrentTravelStore,
} from '@store/currentTravel';

export const useSwipeItemDetails = () => {
  const {
    params: {fsq_id, type},
  } = useRoute<ReactNavigation.RouteFor<'SwipeItemDetails'>>();
  const navigation = useNavigation();

  const addPlaceToViewedListWithPlaceState =
    useAddPlaceToViewedListWithPlaceState();
  const {data} = useCurrentTravelStore();

  const {isAddedToBookmarks, onAddToBookmarks} = useAddBookmarkButton({
    id: fsq_id,
  });

  const currentPlace = data.placesList.find(item => item.fsq_id === fsq_id);
  const photoList = (currentPlace?.photos || []).map(item =>
    photoURLGenerator(item),
  );

  const onGoBack = () => {
    navigation.goBack();
  };

  const onPressChangeState = (event: 'like' | 'dislike') => {
    addPlaceToViewedListWithPlaceState({
      place: data.placesList.find(item => item.fsq_id === fsq_id),
      placeState: event,
    });

    navigation.goBack();
  };

  return {
    onPressChangeState,
    isAddedToBookmarks,
    onAddToBookmarks,
    currentPlace,
    photoList: photoList.length
      ? photoList
      : ['https://cezim.pl/wp-content/uploads/2021/12/empty.jpg'],
    typeScreen: type,
    onGoBack,
  };
};
