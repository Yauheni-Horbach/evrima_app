import React from 'react';
import {View, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {useSwipeItemDetails} from './useSwipeItemDetails';

export const SwipeItemDetails = () => {
  const {onGoBack, location} = useSwipeItemDetails();

  return (
    <View style={styles.card}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        mapType="mutedStandard"
        minZoomLevel={12}>
        <Marker
          coordinate={{latitude: location.lat, longitude: location.lng}}
        />
      </MapView>
      <Button title="Close map" onPress={onGoBack} />
    </View>
  );
};
