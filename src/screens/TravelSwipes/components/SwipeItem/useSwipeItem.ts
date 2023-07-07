import React from 'react';
import {URL_PLACE_PHOTO} from '@api/URLList';

export const useSwipeItem = (photo: string, isCurrent: boolean) => {
  const [urlPhoto, setUrlPhoto] = React.useState('');

  const fetchData = async () => {
    fetch(URL_PLACE_PHOTO(photo))
      .then(data => {
        setUrlPhoto(data.url);
      })
      .catch(() => {});
  };

  React.useEffect(() => {
    if (isCurrent && !urlPhoto) {
      fetchData();
    }
  }, [isCurrent]);

  return {
    urlPhoto,
  };
};
