import React from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import type {PlaceItem} from '@api/types';
import {NewReview} from '@components/NewReview';
import {Rating} from '@components/Rating';
import {useRating} from '@hooks/useRating';

import {Footer, SearchFooter} from './components';
import {
  useItemDetailsBookmarks,
  useItemDetailsCurrentTravel,
  useItemDetailsSearch,
  useTips,
} from './hooks';
import {styles} from './styles';
import {useItemDetails} from './useItemDetails';

const CarouselItem = ({index, photos}: {index: number; photos: string[]}) => (
  <View style={styles.carouselItemBody}>
    <Image source={{uri: photos[index]}} style={styles.carouselItemImage} />
  </View>
);

export const ItemDetailsBody = ({
  children,
  placeInfo,
  photos,
}: {
  children: React.ReactNode;
  placeInfo?: PlaceItem;
  photos: string[];
}) => {
  const width = Dimensions.get('window').width;

  const {tips, onChangeStateTips, isTipsReceived, isTipsOpen} = useTips();
  const {rating, onSetRating} = useRating();

  const photosList = photos?.length
    ? photos
    : ['https://cezim.pl/wp-content/uploads/2021/12/empty.jpg'];

  if (!placeInfo) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{placeInfo.name}</Text>
        <Carousel
          loop
          width={width}
          height={width / 2}
          data={photosList}
          scrollAnimationDuration={500}
          renderItem={({index}) => (
            <CarouselItem index={index} photos={photosList} />
          )}
        />
        <View style={styles.mapContainer}>
          <Text>{placeInfo?.description}</Text>
          <MapView
            style={styles.map}
            region={{
              latitude: placeInfo.geocodes.main.latitude,
              longitude: placeInfo.geocodes.main.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
            mapType="mutedStandard"
            minZoomLevel={12}>
            <Marker
              coordinate={{
                latitude: placeInfo.geocodes.main.latitude,
                longitude: placeInfo.geocodes.main.longitude,
              }}
            />
          </MapView>
        </View>
        <Rating
          rating={rating || 0}
          defaultRating={rating || placeInfo?.rating || 0}
          onSetRating={onSetRating}
        />
        <Button
          onPress={onChangeStateTips}
          title={isTipsOpen ? 'Hide tips' : 'Show tips'}
        />
        {isTipsReceived && !tips.length && <Text>No tips</Text>}
        {isTipsReceived && !!tips.length && isTipsOpen && (
          <View>
            <NewReview />
            {tips.map(item => (
              <View key={item.id}>
                <View style={styles.separator} />
                <Text>{item.created_at}</Text>
                <Text>{item.text}</Text>
                <View style={styles.separator} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      {children}
    </View>
  );
};

const ItemDetailsSearch = ({id}: {id: string}) => {
  const {onGoBack, isAddedToBookmarks, onAddToBookmarks, placeInfo, photos} =
    useItemDetailsSearch(id);

  return (
    <ItemDetailsBody placeInfo={placeInfo} photos={photos}>
      <View style={styles.footer}>
        <SearchFooter
          isAddedToBookmarks={isAddedToBookmarks}
          onAddToBookmarks={onAddToBookmarks}
        />
        <Button title="Close map" onPress={onGoBack} />
      </View>
    </ItemDetailsBody>
  );
};

const ItemDetailsCurrentTravel = ({
  id,
  subType,
}: {
  id: string;
  subType?: string;
}) => {
  const {
    onPressChangeState,
    isAddedToBookmarks,
    onAddToBookmarks,
    placeInfo,
    photos,
    onGoBack,
  } = useItemDetailsCurrentTravel(id);

  return (
    <ItemDetailsBody placeInfo={placeInfo} photos={photos}>
      <View style={styles.footer}>
        <Footer
          onPressChangeState={
            subType === 'bookmarks' ? undefined : onPressChangeState
          }
          isAddedToBookmarks={isAddedToBookmarks}
          onAddToBookmarks={onAddToBookmarks}
        />
        <Button title="Close map" onPress={onGoBack} />
      </View>
    </ItemDetailsBody>
  );
};

const ItemDetailsCurrentBookmarks = ({id}: {id: string}) => {
  const {isAddedToBookmarks, onAddToBookmarks, placeInfo, photos, onGoBack} =
    useItemDetailsBookmarks(id);

  return (
    <ItemDetailsBody placeInfo={placeInfo} photos={photos}>
      <View style={styles.footer}>
        <SearchFooter
          isAddedToBookmarks={isAddedToBookmarks}
          onAddToBookmarks={onAddToBookmarks}
        />
        <Button title="Close map" onPress={onGoBack} />
      </View>
    </ItemDetailsBody>
  );
};

export const ItemDetails = () => {
  const {typeScreen, id, subType} = useItemDetails();

  if (typeScreen === 'bookmarks') {
    return <ItemDetailsCurrentBookmarks id={id} />;
  }

  if (typeScreen === 'search') {
    return <ItemDetailsSearch id={id} />;
  }

  if (typeScreen === 'currentTravel') {
    return <ItemDetailsCurrentTravel id={id} subType={subType} />;
  }
};
