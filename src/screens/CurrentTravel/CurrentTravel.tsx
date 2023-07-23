import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Animated from 'react-native-reanimated';
import {ScreenWrapper} from '@components/ScreenWrapper';
import {GOOGLE_MAPS_KEY} from '@env';

import {styles} from './styles';
import {useCurrentTravel} from './useCurrentTravel';

const renderRightActions = ({
  onOpenSwipeItemDetails,
  onDeleteItem,
}: {
  onOpenSwipeItemDetails: () => void;
  onDeleteItem: () => void;
}) => {
  return (
    <View style={styles.swipeableContainer}>
      <Pressable
        onPress={() => {
          onOpenSwipeItemDetails();
        }}
        style={[styles.swipeableButton, styles.swipeableDone]}>
        <Text style={styles.swipeableButtonText}>Done</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onOpenSwipeItemDetails();
        }}
        style={[styles.swipeableButton, styles.swipeableDetails]}>
        <Text style={styles.swipeableButtonText}>Details</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onDeleteItem();
        }}
        style={[styles.swipeableButton, styles.swipeableDelete]}>
        <Text style={styles.swipeableButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
};

export const CurrentTravel = () => {
  const {
    isLoading,
    currentTravelData,
    likeList,
    onLongPress,
    directions,
    directionsInfo,
    onPressInPlace,
    onOpenSwipeItemDetails,
    onDeleteItem,
    onChangeDirectionInfo,
  } = useCurrentTravel();

  return (
    <ScreenWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <Animated.View style={styles.containerMap}>
            <Text>{currentTravelData.name}</Text>
            <Text>{currentTravelData.location}</Text>
            <MapView
              style={styles.map}
              region={{
                latitude: currentTravelData.coordinates.lat,
                longitude: currentTravelData.coordinates.lng,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
              onLongPress={event => {
                onLongPress(event.nativeEvent.coordinate);
              }}
              mapType="mutedStandard"
              minZoomLevel={10}>
              {directions.origin?.latitude && directions.origin?.longitude ? (
                <Marker
                  pinColor="black"
                  key={directions.origin.id}
                  coordinate={{
                    latitude: directions.origin?.latitude,
                    longitude: directions.origin?.longitude,
                  }}
                  title="Current location"
                />
              ) : null}
              {likeList.map(item => (
                <Marker
                  key={item.fsq_id}
                  coordinate={{
                    latitude: item.geocodes.main.latitude,
                    longitude: item.geocodes.main.longitude,
                  }}
                  title={item.name}
                  onCalloutPress={() => onPressInPlace(item)}
                />
              ))}
              {directions.destination && directions.origin && (
                <MapViewDirections
                  origin={directions.origin}
                  destination={directions.destination}
                  apikey={GOOGLE_MAPS_KEY}
                  mode="WALKING"
                  onReady={value => {
                    onChangeDirectionInfo({
                      distance: value.distance,
                      duration: Math.round(value.duration),
                      startAddress: value.legs[0].start_address.split(',')[0],
                      endAddress: value.legs[0].end_address.split(',')[0],
                    });
                  }}
                />
              )}
            </MapView>
          </Animated.View>
          <View style={styles.directionsContainer}>
            <Text style={styles.directionsInfoItem} numberOfLines={1}>
              Duration - {directionsInfo.duration} min
            </Text>
            <Text style={styles.directionsInfoItem} numberOfLines={1}>
              Start - {directionsInfo.startAddress}
            </Text>
            <Text style={styles.directionsInfoItem} numberOfLines={1}>
              Distance - {directionsInfo.distance} km
            </Text>
            <Text style={styles.directionsInfoItem} numberOfLines={1}>
              End - {directionsInfo.endAddress}
            </Text>
          </View>
          <ScrollView style={styles.placeList}>
            {likeList.map(item => (
              <Swipeable
                key={item.fsq_id}
                renderRightActions={() =>
                  renderRightActions({
                    onOpenSwipeItemDetails: onOpenSwipeItemDetails(item.fsq_id),
                    onDeleteItem: onDeleteItem(item.fsq_id),
                  })
                }>
                <Pressable
                  onPress={() => onPressInPlace(item)}
                  style={[
                    styles.placeItem,
                    (directions.destination?.id === item.fsq_id ||
                      directions.origin?.id === item.fsq_id) &&
                      styles.activePlace,
                  ]}>
                  <Text>
                    {item.name} - {currentTravelData.location}
                  </Text>
                </Pressable>
              </Swipeable>
            ))}
          </ScrollView>
        </>
      )}
    </ScreenWrapper>
  );
};
