import React from 'react';
import {View, Modal, Button, Text, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {useSwipeItem} from './useSwipeItem';

interface SwipeItemProps {
  address: string;
  name: string;
  photo: string;
  rating: number;
  types: string[];
  isCurrent: boolean;
  location: {
    lat: number;
    lng: number;
  };
}

export const SwipeItem = ({
  address,
  name,
  photo,
  rating,
  types,
  isCurrent,
  location,
}: SwipeItemProps) => {
  const {onChangeStateMap, isMapVisible, urlPhoto} = useSwipeItem(
    photo,
    isCurrent,
  );

  return (
    <View style={styles.card}>
      {isMapVisible && (
        <Modal visible={isMapVisible} animationType="slide">
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
          <Button title="Close map" onPress={onChangeStateMap} />
        </Modal>
      )}
      <Text>name-{name}</Text>
      <Text>address-{address}</Text>
      <Text>rating-{rating}</Text>
      <Text>types-{types.join(', ')}</Text>
      <View style={{height: 200, width: 200}}>
        {urlPhoto && (
          <Image
            source={{uri: urlPhoto}}
            style={{height: '100%', width: '100%'}}
          />
        )}
      </View>
      <Button title="Open map" onPress={onChangeStateMap} />
    </View>
  );
};
