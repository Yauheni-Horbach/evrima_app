import {useState, useEffect} from 'react';
import {URL_PLACE_PHOTO} from '@api/URLList';

export const useSwipeItem = (photo: string, isCurrent: boolean) => {
  const [urlPhoto, setUrlPhoto] = useState('');

  const fetchData = async () => {
    fetch(URL_PLACE_PHOTO(photo))
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

  return {
    urlPhoto,
  };
};
