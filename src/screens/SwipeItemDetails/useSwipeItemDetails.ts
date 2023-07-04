import {useNavigation, useRoute} from '@react-navigation/native';

export const useSwipeItemDetails = () => {
  const {
    params: {location},
  } = useRoute<ReactNavigation.RouteFor<'SwipeItemDetails'>>();

  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return {
    onGoBack,
    location,
  };
};
