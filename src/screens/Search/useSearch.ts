import {foursquare_options, URL_PLACES_DETAILS_FOURSQUARE} from '@api/URLList';
import {useNavigation} from '@react-navigation/native';
import {useSetSearchResultProduct} from '@store/search';

export const useSearch = () => {
  const navigation = useNavigation();

  const setSearchResultProduct = useSetSearchResultProduct();

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
        setSearchResultProduct(json);
      })
      .catch(err => console.error('error:' + err));
  };

  const onOpenSwipeItemDetails = (fsq_id: string) => {
    fetchData(fsq_id).then(() => {
      navigation.navigate('ItemDetails', {
        fsq_id,
        type: 'search',
      });
    });
  };

  return {
    onOpenSwipeItemDetails,
  };
};
