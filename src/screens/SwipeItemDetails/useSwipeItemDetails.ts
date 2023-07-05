import {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {URL_PLACE_DETAILS, URL_PLACE_PHOTO} from '@api/URLList';

export const useSwipeItemDetails = () => {
  const {
    params: {location, placeId},
  } = useRoute<ReactNavigation.RouteFor<'SwipeItemDetails'>>();
  const navigation = useNavigation();

  const [itemDetails, setItemDetails] = useState({});
  const [photoList, setPhotosList] = useState([]);

  const fetchData = async () => {
    await fetch(URL_PLACE_DETAILS(placeId))
      .then(response => response.json())
      .then(data => {
        setItemDetails(data.result);
        return data.result;
      })
      .then(data => {
        Promise.all(
          data.photos
            .map(photo => photo.photo_reference)
            .map(type => fetch(URL_PLACE_PHOTO(type))),
        ).then(result => {
          setPhotosList(result.map(response => response.url));
        });
      })
      .catch(error => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onGoBack = () => {
    navigation.goBack();
  };

  return {
    onGoBack,
    location,
    photoList,
    itemDetails,
  };
};
