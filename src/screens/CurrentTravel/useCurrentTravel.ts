import {useCurrentTravelStore} from '@store/currentTravel';

export const useCurrentTravel = () => {
  const {data} = useCurrentTravelStore();

  const likeList = data.placesList.filter(place => place.placeState === 'like');

  return {
    isLoading: false,
    errorText: '',
    currentTravelData: data,
    likeList,
  };
};
