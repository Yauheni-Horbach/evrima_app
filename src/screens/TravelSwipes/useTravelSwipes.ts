import React from 'react';
import Swiper from 'react-native-deck-swiper';
import type {PlaceItem} from '@api/types';
import {foursquare_options, URL_PLACES_SEARCH_FOURSQUARE} from '@api/URLList';
import {NavigationProp} from '@navigation/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  useAddPlaceToViewedListWithPlaceState,
  useCurrentTravelStore,
  useFilterPlacesList,
  useUpdateCurrentTravel,
  useUpdatePlacesList,
} from '@store/currentTravel';
import {useUserStore} from '@store/user';

export const useTravelSwipes = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const isSkipFilterPlacesList = React.useRef(false);
  const swiperRef = React.useRef<Swiper<PlaceItem>>(null);

  const {data: currentTravelData} = useCurrentTravelStore();
  const {data: userData} = useUserStore();

  const nextPageUrl = React.useRef(currentTravelData.nextPageLink);

  const updatePlacesList = useUpdatePlacesList();
  const addPlaceToViewedListWithPlaceState =
    useAddPlaceToViewedListWithPlaceState();
  const updateCurrentTravel = useUpdateCurrentTravel();
  const filterPlacesList = useFilterPlacesList();

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const fetchData = () => {
    const url = URL_PLACES_SEARCH_FOURSQUARE({
      coordinates: currentTravelData.coordinates,
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
      radius: currentTravelData.radius,
    });

    fetch(nextPageUrl.current || url, foursquare_options)
      .then((res: any) => {
        const nextLinkString = res.headers.map.link;

        const regex = /<([^>]+)>/;
        const match = regex.exec(nextLinkString);
        let link = '';

        if (match && match.length > 1) {
          link = match[1];
        }

        updateCurrentTravel({nextPageLink: link});
        nextPageUrl.current = link;

        return res.json();
      })
      .then(json => {
        const items: PlaceItem[] = json.results
          .sort(() => 0.5 - Math.random())
          .filter((item: PlaceItem) => item?.photos?.length);

        updatePlacesList({placesList: items});
      })
      .catch(err => console.error('error:' + err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (!isSkipFilterPlacesList.current) {
          filterPlacesList();
          setCurrentCardIndex(0);
          swiperRef.current?.jumpToCardIndex(0);
        }
        isSkipFilterPlacesList.current = false;
      };
    }, [isSkipFilterPlacesList.current]),
  );

  React.useEffect(() => {
    const likeAndDislikeList = [
      ...currentTravelData.dislikeList,
      ...currentTravelData.likeList,
    ];

    if (
      likeAndDislikeList.find(
        item =>
          item.fsq_id ===
          currentTravelData.placesList[currentCardIndex]?.fsq_id,
      )
    ) {
      setCurrentCardIndex(currentCardIndex + 1);
      swiperRef.current?.swipeBottom();
    }
  }, [currentTravelData.dislikeList, currentTravelData.likeList]);

  const onSwiped = (index: number, event: 'like' | 'dislike') => {
    setCurrentCardIndex(index + 1);

    addPlaceToViewedListWithPlaceState(userData.id, {
      placeItem: currentTravelData.placesList[index],
      event,
      currentTravelId: currentTravelData.id,
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
      isSkipFilterPlacesList.current = true;
      navigation.navigate('ItemDetails', {
        fsq_id,
        type: 'currentTravel',
      });
    };
  };

  const updateList = (index: number) => {
    if (
      index + 4 === currentTravelData.placesList.length &&
      currentTravelData.nextPageLink
    ) {
      fetchData();
    }
  };

  return {
    isLoading: !currentTravelData.placesList.length,
    errorText: '',
    listItems: currentTravelData.placesList,
    onSwiped,
    onPressChangeState,
    onOpenSwipeItemDetails,
    updateList,
    swiperRef,
    currentCardIndex,
  };
};
