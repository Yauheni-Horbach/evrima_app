import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {foursquare_options, URL_PLACES_SEARCH_FOURSQUARE} from '@api/URLList';
import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  useAddPlaceToViewedListWithPlaceState,
  useCurrentTravelStore,
  useUpdatePlacesList,
} from '@store/currentTravel';

export const useTravelSwipes = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const swiperRef = React.useRef<Swiper<null>>(null);

  const {data} = useCurrentTravelStore();

  const updatePlacesList = useUpdatePlacesList();
  const addPlaceToViewedListWithPlaceState =
    useAddPlaceToViewedListWithPlaceState();

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const fetchData = () => {
    const url = URL_PLACES_SEARCH_FOURSQUARE({
      coordinates: data.coordinates,
      categories: [10000],
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
        console.log(123);
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
    const likeAndDislikeList = [...data.dislikeList, ...data.likeList];

    if (
      likeAndDislikeList.find(
        item => item.fsq_id === data.placesList[currentCardIndex]?.fsq_id,
      )
    ) {
      setCurrentCardIndex(currentCardIndex + 1);
      swiperRef.current?.swipeBottom();
    }
  }, [data.dislikeList, data.likeList]);

  const onSwiped = (index: number, event: 'like' | 'dislike') => {
    setCurrentCardIndex(index + 1);

    addPlaceToViewedListWithPlaceState({
      place: data.placesList[index],
      placeState: event,
    });
  };

  const onPressChangeState = (event: 'like' | 'dislike') => {
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

  const updateList = (index: number) => {
    console.log(index + 2, data.placesList.length);
    if (index === data.placesList.length) {
      console.log('----');
      fetchData();
    }
  };

  return {
    isLoading: !data.placesList.length,
    errorText: '',
    listItems: data.placesList,
    onSwiped,
    onPressChangeState,
    onOpenSwipeItemDetails,
    updateList,
    swiperRef,
    currentCardIndex,
  };
};
