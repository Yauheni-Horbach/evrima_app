import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {PlaceItem} from '@api/types';
import {DataUser} from '@store/currentTravel/types';

import {DirectionsState} from '../../useCurrentTravel';

import {styles} from './styles';

const renderRightActions = ({
  onOpenSwipeItemDetails,
  onDeleteItem,
  onOpenDoneModal,
}: {
  onOpenSwipeItemDetails?: () => void;
  onDeleteItem?: () => void;
  onOpenDoneModal?: () => void;
}) => {
  return (
    <View style={styles.swipeableContainer}>
      {onOpenDoneModal && (
        <Pressable
          onPress={() => {
            onOpenDoneModal();
          }}
          style={[styles.swipeableButton, styles.swipeableDone]}>
          <Text style={styles.swipeableButtonText}>Done</Text>
        </Pressable>
      )}
      {onOpenSwipeItemDetails && (
        <Pressable
          onPress={() => {
            onOpenSwipeItemDetails();
          }}
          style={[styles.swipeableButton, styles.swipeableDetails]}>
          <Text style={styles.swipeableButtonText}>Details</Text>
        </Pressable>
      )}
      {onDeleteItem && (
        <Pressable
          onPress={() => {
            onDeleteItem();
          }}
          style={[styles.swipeableButton, styles.swipeableDelete]}>
          <Text style={styles.swipeableButtonText}>Delete</Text>
        </Pressable>
      )}
    </View>
  );
};

export const PlaceCardItem = ({
  item,
  directions,
  currentTravelData,
  onPressInPlace,
  onOpenSwipeItemDetails,
  onDeleteItem,
  onOpenDoneModal,
  isVisited,
}: {
  item: PlaceItem;
  directions: DirectionsState;
  currentTravelData: DataUser;
  onPressInPlace?: () => void;
  onOpenSwipeItemDetails?: () => void;
  onDeleteItem?: () => void;
  onOpenDoneModal?: () => void;
  isVisited?: boolean;
}) => {
  return (
    <Swipeable
      key={item.fsq_id}
      renderRightActions={() =>
        renderRightActions({
          onOpenSwipeItemDetails,
          onDeleteItem,
          onOpenDoneModal,
        })
      }>
      <Pressable
        onPress={onPressInPlace}
        style={[
          styles.placeItem,
          (directions.destination?.id === item.fsq_id ||
            directions.origin?.id === item.fsq_id) &&
            styles.activePlace,
          isVisited && styles.visitedPlace,
        ]}>
        <Text>
          {item.name} - {currentTravelData.location}
        </Text>
      </Pressable>
    </Swipeable>
  );
};
