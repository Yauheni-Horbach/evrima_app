import React from 'react';
import {View, Modal, Button} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from './styles';
import {useSwipeItem} from './useSwipeItem';

export const SwipeItem = () => {
  const {onChangeStateMap, isMapVisible} = useSwipeItem();

  return (
    <View style={styles.card}>
      <Modal visible={isMapVisible} animationType="slide">
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
        <Button title="Close map" onPress={onChangeStateMap} />
      </Modal>
      <Button title="Open map" onPress={onChangeStateMap} />
    </View>
  );
};
