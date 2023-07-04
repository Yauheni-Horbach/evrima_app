import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {styles} from './styles';
import {useSwipeItem} from './useSwipeItem';
import {Footer} from './Footer';

interface SwipeItemProps {
  address: string;
  name: string;
  photo: string;
  rating: number;
  types: string[];
  isCurrent: boolean;
  onOpenSwipeItemDetails: () => void;
}

export const SwipeItem = ({
  address,
  name,
  photo,
  rating,
  types,
  isCurrent,
  onOpenSwipeItemDetails,
}: SwipeItemProps) => {
  const {urlPhoto} = useSwipeItem(photo, isCurrent);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
        <Button title="Open Details" onPress={onOpenSwipeItemDetails} />
      </View>
      <Footer />
    </View>
  );
};
