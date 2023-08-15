import {foursquare_options, URL_PLACES_DETAILS_FOURSQUARE} from '@api/URLList';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useCurrentTravelStore, useUpdatePlacesList} from '@store/currentTravel';

export const useSearchCurrentTravel = () => {
  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const updatePlacesList = useUpdatePlacesList();
  const {data: currentTravelData} = useCurrentTravelStore();

  const fetchData = async (fsq_id: string) => {
    const url = URL_PLACES_DETAILS_FOURSQUARE({
      fields: [
        'fsq_id',
        'name',
        'location',
        'geocodes',
        'categories',
        'description',
        'website',
        'hours',
        'rating',
        'price',
        'photos',
      ],
      fsq_id,
    });

    await fetch(url, foursquare_options)
      .then(res => res.json())
      .then(json => {
        updatePlacesList({placesList: [json]});
      })
      .catch(err => console.error('error:' + err));
  };

  const onOpenSwipeItemDetails = (fsq_id: string) => {
    fetchData(fsq_id).then(() => {
      navigation.navigate('ItemDetails', {
        fsq_id,
        type: 'currentTravel',
      });
    });
  };

  return {
    onOpenSwipeItemDetails,
    coordinates: currentTravelData.coordinates,
  };
};
