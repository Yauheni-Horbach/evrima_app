import React from 'react';
import {Pressable, Text} from 'react-native';
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
                  onReady={event => {
                    console.log(event);
                  }}
                  mode="WALKING"
                />
              )}
            </MapView>
          </Animated.View>
          {likeList.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => onPressInPlace(item)}
              style={styles.placeItem}>
              <Text>
                {item.name} - {currentTravelData.location}
              </Text>
            </Pressable>
          ))}
        </>
      )}
    </ScreenWrapper>
  );
};
