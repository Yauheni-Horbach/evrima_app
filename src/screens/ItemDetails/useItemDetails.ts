import {useRoute} from '@react-navigation/native';

export const useItemDetails = () => {
  const {
    params: {fsq_id, type},
  } = useRoute<ReactNavigation.RouteFor<'ItemDetails'>>();

  return {
    typeScreen: type,
    id: fsq_id,
  };
};
