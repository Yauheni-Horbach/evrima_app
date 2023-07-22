import {useRoute} from '@react-navigation/native';

export const useItemDetails = () => {
  const {
    params: {fsq_id, type, subType},
  } = useRoute<ReactNavigation.RouteFor<'ItemDetails'>>();

  return {
    typeScreen: type,
    id: fsq_id,
    subType,
  };
};
