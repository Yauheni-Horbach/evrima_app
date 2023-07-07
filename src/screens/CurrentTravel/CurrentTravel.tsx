import React from 'react';
import {Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {ScreenWrapper} from '@components/ScreenWrapper';

import {styles} from './styles';
import {useCurrentTravel} from './useCurrentTravel';

export const CurrentTravel = () => {
  const {
    isLoading,
    currentTravelData,
    likeList,
    onLongPress,
    startTravelLocation,
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
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng,
                  }}
                  title={item.name}
                  description={item.vicinity}
                />
              ))}
            </MapView>
          </Animated.View>
          {likeList.map((item, index) => (
            <Text key={index}>
              {item.name} - {currentTravelData.location}
            </Text>
          ))}
        </>
      )}
    </ScreenWrapper>
  );
};
