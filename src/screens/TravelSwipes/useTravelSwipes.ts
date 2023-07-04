import {useEffect, useState} from 'react';
import {GOOGLE_MAPS_KEY} from '@env';
import {googleMapsPlaceTextSearch} from '@mocks';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@navigation/types';

const types = ['art_gallery', 'bar', 'cafe'];

const requests = types.map(type =>
  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${GOOGLE_MAPS_KEY}&query=OSLO&radius=2000&type=${type}`,
  ),
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

  const onOpenSwipeItemDetails = (location: {lat: number; lng: number}) => {
    return () => {
      navigation.navigate('SwipeItemDetails', {
        location,
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
