import {useState} from 'react';

export const useSwipeItem = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);

  const onChangeStateMap = () => {
    setIsMapVisible(!isMapVisible);
  };
  return {
    isMapVisible,
    onChangeStateMap,
  };
};
