import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Modal} from '@components/Modal';
import {NewReview} from '@components/NewReview';
import {Rating} from '@components/Rating';
import {useRating} from '@hooks/useRating';
import {
  useAddIdToVisitedPlaces,
  useCurrentTravelStore,
} from '@store/currentTravel';

import {styles} from './styles';

interface ModalProps {
  fsq_id: string;
  isModalOpen: boolean;
  changeStateModal: () => void;
}

export const DoneModal = ({
  fsq_id,
  isModalOpen,
  changeStateModal,
}: ModalProps) => {
  const {data: currentTravelData} = useCurrentTravelStore();
  const addIdToVisitedPlaces = useAddIdToVisitedPlaces();

  const {rating, onSetRating} = useRating();

  const currentPlace = currentTravelData.likeList?.find(
    item => item.fsq_id === fsq_id,
  );

  const onClose = () => {
    changeStateModal();
    onSetRating(null);
  };

  const onPressDone = () => {
    addIdToVisitedPlaces({fsq_id});
    onClose();
  };

  return (
    <Modal visible={isModalOpen} onClose={onClose}>
      <Rating
        rating={rating || 0}
        defaultRating={rating || currentPlace?.rating || 0}
        onSetRating={onSetRating}
      />
      <NewReview />
      <TouchableOpacity style={styles.doneButton} onPress={onPressDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </Modal>
  );
};
