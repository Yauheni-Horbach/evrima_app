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
  const {
    currentPlace,
    photoList,
    onPressChangeState,
    typeScreen,
    isAddedToBookmarks,
    onAddToBookmarks,
    onGoBack,
  } = useSwipeItemDetails();

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{currentPlace.name}</Text>
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
              latitude: currentPlace.geocodes.main.latitude,
              longitude: currentPlace.geocodes.main.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
            mapType="mutedStandard"
            minZoomLevel={12}>
            <Marker
              coordinate={{
                latitude: currentPlace.geocodes.main.latitude,
                longitude: currentPlace.geocodes.main.longitude,
              }}
            />
          </MapView>
        </View>
      </ScrollView>
      {typeScreen === 'currentTravel' ||
      typeScreen === 'searchCurrentTravel' ? (
        <View style={styles.footer}>
          <Footer
            onPressChangeState={onPressChangeState}
            isAddedToBookmarks={isAddedToBookmarks}
            onAddToBookmarks={onAddToBookmarks}
          />
        </View>
      ) : (
        <Button title="Close map" onPress={onGoBack} />
      )}
    </View>
  );
};
