import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from './styles';
import {useCurrentTravel} from './useCurrentTravel';
import Animated from 'react-native-reanimated';

export const CurrentTravel = () => {
  const {isLoading, onOpenSwipes} = useCurrentTravel();

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
          <Button title="Swipes" onPress={onOpenSwipes} />
        </>
      )}
    </View>
  );
};
