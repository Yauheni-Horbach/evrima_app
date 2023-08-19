import {useClearCurrentTravelStore} from '@store/currentTravel';
import {useUpdateUserProfile, useUserStore} from '@store/user';

export const useJourneyHistory = () => {
  const {data: userData} = useUserStore();
  const updateUserProfile = useUpdateUserProfile();

  const clearCurrentTravelStore = useClearCurrentTravelStore();

  const onPressItem = (travelId: string) => {
    console.log(travelId);
    updateUserProfile(userData.id, {
      currentTravelId: travelId,
    });

    clearCurrentTravelStore();
  };

  return {
    travelList: userData.travelList,
    currentTravelId: userData.currentTravelId,
    onPressItem,
  };
};
