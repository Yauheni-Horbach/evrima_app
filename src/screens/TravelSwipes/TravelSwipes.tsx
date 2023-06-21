import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useTravelSwipes} from './useTravelSwipes';
import Swiper from 'react-native-deck-swiper';

import {SwipeItem} from './components';

export const TravelSwipes = () => {
  const {isLoading} = useTravelSwipes();

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.container}>
            <Swiper
              cards={[]}
              renderCard={card => {
                return <SwipeItem />;
              }}
              onSwiped={cardIndex => {
                console.log(cardIndex);
              }}
              onSwipedAll={() => {
                console.log('onSwipedAll');
              }}
              onSwipedLeft={() => {
                console.log('left');
              }}
              onSwipedRight={() => {
                console.log('right');
              }}
              onSwiping={(cardIndex, gestureDirection) => {
                console.log(cardIndex, gestureDirection);
              }}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize={3}
            />
          </View>
        </>
      )}
    </View>
  );
};
