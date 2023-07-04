import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {styles} from './styles';
import {useCurrentTravel} from './useCurrentTravel';

export const CurrentTravel = () => {
  const {isLoading} = useCurrentTravel();

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <Animated.View
            style={styles.containerMap}
            sharedTransitionTag="mapTag">
            <MapView
              style={styles.map}
              region={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
              mapType="mutedStandard"
              minZoomLevel={7}></MapView>
          </Animated.View>
        </>
      )}
    </View>
  );
};
