import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Animated from 'react-native-reanimated';
import {ScreenWrapper} from '@components/ScreenWrapper';
import {GOOGLE_MAPS_KEY} from '@env';

import {
  DirectionsInfoItem,
  DoneModal,
  MarkerItem,
  PlaceCardItem,
} from './components';
import {styles} from './styles';
import {useCurrentTravel} from './useCurrentTravel';

export const CurrentTravel = () => {
  const {
    isLoading,
    currentTravelData,
    likeList,
    onLongPress,
    directions,
    visitedList,
    onPressInPlace,
    onOpenSwipeItemDetails,
    onDeleteItem,
    onChangeDirectionInfo,
    doneModal,
    changeStateDoneModalOpen,
    directionsInfoData,
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
                <MarkerItem
                  key={item.fsq_id}
                  item={item}
                  pinColor="red"
                  onCalloutPress={() => onPressInPlace(item)}
                />
              ))}
              {visitedList.map(item => (
                <MarkerItem
                  key={item.fsq_id}
                  item={item}
                  pinColor="green"
                  onCalloutPress={() => {}}
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
            {directionsInfoData.map(item => (
              <DirectionsInfoItem
                key={item.key}
                title={item.title}
                value={item.value}
              />
            ))}
          </View>
          <ScrollView style={styles.placeList}>
            {likeList.map(item => (
              <PlaceCardItem
                key={item.fsq_id}
                item={item}
                directions={directions}
                currentTravelData={currentTravelData}
                onPressInPlace={() => onPressInPlace(item)}
                onOpenSwipeItemDetails={onOpenSwipeItemDetails(item.fsq_id)}
                onDeleteItem={onDeleteItem(item.fsq_id)}
                onOpenDoneModal={changeStateDoneModalOpen(item.fsq_id)}
              />
            ))}
            {visitedList.map(item => (
              <PlaceCardItem
                key={item.fsq_id}
                item={item}
                directions={directions}
                currentTravelData={currentTravelData}
                onOpenSwipeItemDetails={onOpenSwipeItemDetails(item.fsq_id)}
                onDeleteItem={onDeleteItem(item.fsq_id)}
                isVisited
              />
            ))}
          </ScrollView>
          <DoneModal
            fsq_id={doneModal.fsq_id}
            isModalOpen={doneModal.isModalOpen}
            changeStateModal={changeStateDoneModalOpen(doneModal.fsq_id)}
          />
        </>
      )}
    </ScreenWrapper>
  );
};
