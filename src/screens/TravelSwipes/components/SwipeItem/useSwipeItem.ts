import {useState, useEffect} from 'react';
import {GOOGLE_MAPS_KEY} from '@env';

export const useSwipeItem = (photo: string, isCurrent: boolean) => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [urlPhoto, setUrlPhoto] = useState('');

  const fetchData = async () => {
    const URL = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo}&key=${GOOGLE_MAPS_KEY}&maxwidth=800`;

    fetch(URL)
      .then(data => {
        setUrlPhoto(data.url);
      })
      .catch(error => {});
  };

  useEffect(() => {
    if (isCurrent && !urlPhoto) {
      fetchData();
    }
  }, [isCurrent]);

  const onChangeStateMap = () => {
    setIsMapVisible(!isMapVisible);
  };
  return {
    isMapVisible,
    onChangeStateMap,
    urlPhoto,
  };
};
