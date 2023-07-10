import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {ScreenWrapper} from '@components/ScreenWrapper';
import {photoURLGenerator} from '@managers/PhotoURLGenerator';

import {SwipeItem} from './components';
import {styles} from './styles';
import {useTravelSwipes} from './useTravelSwipes';

export const TravelSwipes = () => {
  const {
    isLoading,
    listItems,
    swiperRef,
    onSwiped,
    updateList,
    onPressChangeState,
    onOpenSwipeItemDetails,
  } = useTravelSwipes();

  return (
    <ScreenWrapper style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.container}>
            <Swiper
              ref={swiperRef}
              cards={listItems}
              renderCard={(card, index) => {
                return (
                  <SwipeItem
                    key={index}
                    address={card.location.formatted_address}
                    name={card.name}
                    id={card.fsq_id}
                    urlPhoto={
                      card.photos[0] ? photoURLGenerator(card.photos[0]) : ''
                    }
                    rating={card.rating}
                    onChangeState={state => onPressChangeState(state)}
                    onOpenSwipeItemDetails={onOpenSwipeItemDetails(card.fsq_id)}
                  />
                );
              }}
              onSwipedLeft={index => {
                onSwiped(index, 'dislike');
              }}
              onSwipedRight={index => {
                onSwiped(index, 'like');
              }}
              onSwiped={updateList}
              containerStyle={styles.swiperContainer}
              cardStyle={styles.swiperCard}
              cardIndex={0}
              stackSize={3}
            />
          </View>
        </>
      )}
    </ScreenWrapper>
  );
};
