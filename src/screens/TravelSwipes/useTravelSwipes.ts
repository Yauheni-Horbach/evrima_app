import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {foursquare_options, URL_PLACES_SEARCH_FOURSQUARE} from '@api/URLList';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useChangePlaceState,
  useCurrentTravelStore,
  useUpdatePlacesList,
} from '@store/currentTravel';

export const useTravelSwipes = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const swiperRef = React.useRef<Swiper<null>>(null);

  const {data} = useCurrentTravelStore();

  const updatePlacesList = useUpdatePlacesList();
  const changePlaceState = useChangePlaceState();

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const fetchData = () => {
    const url = URL_PLACES_SEARCH_FOURSQUARE({
      coordinates: data.coordinates,
      categories: [10027, 10056],
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
      radius: data.radius,
    });

    fetch(url, foursquare_options)
      .then(res => res.json())
      .then(json => {
        const items = json.results
          .sort(() => 0.5 - Math.random())
          .filter(item => item.photos && item.photos.length);
        updatePlacesList({placesList: items});
      })
      .catch(err => console.error('error:' + err));
  };

  React.useEffect(() => {
    fetchData();
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
      fsq_id: data.placesList[index].fsq_id,
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

  const onOpenSwipeItemDetails = (fsq_id: string) => {
    return () => {
      navigation.navigate('SwipeItemDetails', {
        fsq_id,
        type: 'currentTravel',
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
