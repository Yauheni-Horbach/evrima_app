import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useTravelSwipes} from './useTravelSwipes';
import Swiper from 'react-native-deck-swiper';

import {SwipeItem, Footer} from './components';

export const TravelSwipes = () => {
  const {
    isLoading,
    listItems,
    currentCardIndex,
    onSwiped,
    onOpenSwipeItemDetails,
  } = useTravelSwipes();

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.container}>
            <Swiper
              cards={listItems}
              renderCard={(card, index) => {
                return (
                  <SwipeItem
                    key={index}
                    isCurrent={
                      index >= currentCardIndex && index <= currentCardIndex + 2
                    }
                    address={card.formatted_address}
                    name={card.name}
                    photo={card.photos[0].photo_reference}
                    rating={card.user_ratings_total}
                    types={card.types}
                    onOpenSwipeItemDetails={onOpenSwipeItemDetails(
                      card.geometry.location,
                    )}
                  />
                );
              }}
              onSwipedAll={() => {}}
              onSwipedLeft={() => {
                onSwiped();
              }}
              onSwipedRight={() => {
                onSwiped();
              }}
              containerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              cardStyle={{
                borderRadius: 10,
                height: '80%',
              }}
              cardIndex={0}
              stackSize={3}
            />
          </View>
          <Footer />
        </>
      )}
    </View>
  );
};
