import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {URL_PLACE_TEXT_SEARCH} from '@api/URLList';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useChangePlaceState,
  useCurrentTravelStore,
  useUpdateCurrentTravel,
} from '@store/currentTravel';

//TODO-SRC - add new types
const types = ['art_gallery'];

const requests = (query: string) =>
  types.map(type => fetch(URL_PLACE_TEXT_SEARCH({type, query})));

export const useTravelSwipes = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const swiperRef = React.useRef<Swiper<null>>(null);

  const {data} = useCurrentTravelStore();
  const updateCurrentTravel = useUpdateCurrentTravel();
  const changePlaceState = useChangePlaceState();

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const fetch = () => {
    Promise.all(requests(data.location))
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(result => {
        const items = result
          .flatMap(item => item.results)
          .sort(() => 0.5 - Math.random())
          .filter(item => item.photos && item.photos.length);
        updateCurrentTravel({placesList: items});
      });
  };

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    if (data.placesList[currentCardIndex]?.placeState) {
      setCurrentCardIndex(currentCardIndex + 1);
      swiperRef.current?.swipeBottom();
    }
  }, [data.placesList]);

  const onSwiped = (index: number, event: 'like' | 'dislike') => {
    setCurrentCardIndex(index + 1);

    changePlaceState({
      place_id: data.placesList[index].place_id,
      placeState: event,
    });
  };

  const onPressChangeState = (index: number, event: 'like' | 'dislike') => {
    onSwiped(index, event);
    if (event === 'dislike') {
      swiperRef.current?.swipeLeft();
    } else {
      swiperRef.current?.swipeRight();
    }
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
    isLoading: !data.placesList.length,
    errorText: '',
    listItems: data.placesList,
    onSwiped,
    onPressChangeState,
    onOpenSwipeItemDetails,
    swiperRef,
    currentCardIndex,
  };
};
