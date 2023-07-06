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
  onChangeState: (state: 'dislike' | 'like') => void;
}

export const SwipeItem = ({
  address,
  name,
  photo,
  rating,
  types,
  isCurrent,
  onOpenSwipeItemDetails,
  onChangeState,
}: SwipeItemProps) => {
  const {urlPhoto} = useSwipeItem(photo, isCurrent);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>name-{name}</Text>
        <Text>address-{address}</Text>
        <Text>rating-{rating}</Text>
        <Text>types-{types.join(', ')}</Text>
        <View style={{height: 350, width: 350}}>
          {urlPhoto && (
            <Image
              source={{uri: urlPhoto}}
              style={{height: '100%', width: '100%'}}
            />
          )}
        </View>
        <Button title="Open Details" onPress={onOpenSwipeItemDetails} />
      </View>
      <Footer onChangeState={onChangeState} />
    </View>
  );
};
