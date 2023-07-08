import {photoURLGenerator} from '@managers/PhotoURLGenerator';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useChangePlaceState, useCurrentTravelStore} from '@store/currentTravel';

export const useSwipeItemDetails = () => {
  const {
    params: {fsq_id},
  } = useRoute<ReactNavigation.RouteFor<'SwipeItemDetails'>>();
  const navigation = useNavigation();

  const changePlaceState = useChangePlaceState();
  const {data} = useCurrentTravelStore();

  const currentPlace = data.placesList.find(item => item.fsq_id === fsq_id);
  const photoList = currentPlace.photos.map(item => photoURLGenerator(item));

  const onGoBack = () => {
    navigation.goBack();
  };

  const onPressChangeState = (event: 'like' | 'dislike') => {
    changePlaceState({
      fsq_id,
      placeState: event,
    });

    navigation.goBack();
  };

  return {
    onGoBack,
    onPressChangeState,
    currentPlace,
    photoList,
  };
};
