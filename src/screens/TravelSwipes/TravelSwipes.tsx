import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useTravelSwipes} from './useTravelSwipes';
import Swiper from 'react-native-deck-swiper';
import {ScreenWrapper} from '@components/ScreenWrapper';
import {SwipeItem} from './components';

export const TravelSwipes = () => {
  const {
    isLoading,
    listItems,
    currentCardIndex,
    onSwiped,
    onOpenSwipeItemDetails,
  } = useTravelSwipes();

  return (
    <ScreenWrapper style={styles.container}>
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
                      card.place_id,
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
                borderRadius: 30,
                height: '90%',
              }}
              cardIndex={0}
              stackSize={3}
            />
          </View>
        </>
      )}
    </ScreenWrapper>
  );
};
