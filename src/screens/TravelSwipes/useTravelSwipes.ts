import {useEffect, useState} from 'react';
import {URL_PLACE_TEXT_SEARCH} from '@api/URLList';
import {googleMapsPlaceTextSearch} from '@mocks';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

const types = ['art_gallery', 'bar', 'cafe'];

//TODO - remove mocks and change query value
const requests = types.map(type =>
  fetch(URL_PLACE_TEXT_SEARCH({type, query: 'OSLO'})),
);

export const useTravelSwipes = () => {
  const [listItems, setListItems] = useState(googleMapsPlaceTextSearch);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const fetch = () => {
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(result => {
        const items = result
          .flatMap(item => item.results)
          .sort(() => 0.5 - Math.random())
          .filter(item => item.photos && item.photos.length > 0);
        setListItems(items);
      });
  };

  useEffect(() => {
    //TODO
    // fetch();
  }, []);

  const onSwiped = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const onOpenSwipeItemDetails = (
    location: {lat: number; lng: number},
    place_id: string,
  ) => {
    return () => {
      navigation.navigate('SwipeItemDetails', {
        location,
        placeId: place_id,
      });
    };
  };

  return {
    isLoading: !listItems.length,
    errorText: '',
    listItems,
    onSwiped,
    onOpenSwipeItemDetails,
    currentCardIndex,
  };
};
