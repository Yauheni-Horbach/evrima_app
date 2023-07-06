import React from 'react';
import {Image, Button, Dimensions, ScrollView, View, Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {useSwipeItemDetails} from './useSwipeItemDetails';
import {Footer} from './components';

export const SwipeItemDetails = () => {
  const {onGoBack, location, photoList, itemDetails} = useSwipeItemDetails();

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{itemDetails.name}</Text>
        <Carousel
          loop
          width={width}
          height={width / 2}
          data={photoList}
          scrollAnimationDuration={500}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: photoList[index]}}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          )}
        />
        <View style={styles.mapContainer}>
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
        </View>
        <Button title="Close map" onPress={onGoBack} />
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};
