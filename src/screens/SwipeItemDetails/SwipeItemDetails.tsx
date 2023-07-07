import React from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';

import {Footer} from './components';
import {styles} from './styles';
import {useSwipeItemDetails} from './useSwipeItemDetails';

const CarouselItem = ({index, photoList}: {index: number; photoList: any}) => (
  <View style={styles.carouselItemBody}>
    <Image source={{uri: photoList[index]}} style={styles.carouselItemImage} />
  </View>
);

export const SwipeItemDetails = () => {
  const {onGoBack, location, photoList, itemDetails, onPressChangeState} =
    useSwipeItemDetails();

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
            <CarouselItem index={index} photoList={photoList} />
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
        <Footer onPressChangeState={onPressChangeState} />
      </View>
    </View>
  );
};
