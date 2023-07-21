import React from 'react';
import {View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {Tab} from './components';
import {styles} from './styles';

type State = {
  key: string;
  index: number;
  routes: Array<{
    key: string;
    name: string;
    params?: object;
  }>;
};

type Descriptor = {
  key: string;
  name: string;
  options: {
    title?: string;
  };
};

type Navigation = {
  dispatch: (action: any) => void;
  navigate: (routeName: string) => void;
  emit: (event: any) => {defaultPrevented: boolean};
};

type TabMenuProps = {
  state: State;
  descriptors: {[key: string]: Descriptor};
  navigation: Navigation;
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

  const onTabPress = (
    route: {key: string; name: string},
    isFocused: boolean,
  ) => {
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
      {state.routes.map((route: {key: string; name: string}, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.title ?? route.name;
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
