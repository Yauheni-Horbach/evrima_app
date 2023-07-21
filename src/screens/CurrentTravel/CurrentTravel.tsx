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

export const CurrentTravel = () => {
  const {
    isLoading,
    currentTravelData,
    likeList,
    onLongPress,
    startTravelLocation,
    directions,
    onPressInPlace,
    onOpenSwipeItemDetails,
    onDeleteItem,
  } = useCurrentTravel();

  const renderRightActions = ({onOpenSwipeItemDetails, onDeleteItem}) => {
    return (
      <View style={styles.swipeableContainer}>
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
              minZoomLevel={12}>
              {startTravelLocation.location.lat &&
              startTravelLocation.location.lng ? (
                <Marker
                  pinColor="black"
                  key={startTravelLocation.id}
                  coordinate={{
                    latitude: startTravelLocation.location.lat,
                    longitude: startTravelLocation.location.lng,
                  }}
                  title={startTravelLocation.title}
                />
              ) : null}
              {likeList.map((item, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.geocodes.main.latitude,
                    longitude: item.geocodes.main.longitude,
                  }}
                  title={item.name}
                  description={item.vicinity}
                />
              ))}
              {directions.destination && directions.origin && (
                <MapViewDirections
                  origin={directions.origin}
                  destination={directions.destination}
                  apikey={GOOGLE_MAPS_KEY}
                  mode="WALKING"
                />
              )}
            </MapView>
          </Animated.View>
          <ScrollView>
            {likeList.map((item, index) => (
              <Swipeable
                key={index}
                renderRightActions={() =>
                  renderRightActions({
                    onOpenSwipeItemDetails: onOpenSwipeItemDetails(item.fsq_id),
                    onDeleteItem: onDeleteItem(item.fsq_id),
                  })
                }>
                <Pressable
                  onPress={() => onPressInPlace(item)}
                  style={styles.placeItem}>
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
