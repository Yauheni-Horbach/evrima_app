import * as React from 'react';
import {View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {styles} from './styles';
import {Tab} from './components';

type TabMenuProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

export const CurrentTravelTabs: React.FC<TabMenuProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const onBackPress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  const onTabPress = (route: any, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={styles.container}>
      <Tab key="back" onPress={onBackPress} label="Back" />
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;
        const isCurrentTravel = route.name === 'CurrentTravel';
        const isFocused = state.index === index;

        return (
          <Tab
            key={route.name}
            onPress={() => onTabPress(route, isFocused)}
            isFocused={isFocused}
            isMainTab={isCurrentTravel}
            label={label}
          />
        );
      })}
    </View>
  );
};
