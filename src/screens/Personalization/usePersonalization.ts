import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export const usePersonalization = () => {
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [enableLocation, setEnableLocation] = useState(false);
  const [enableRecommendations, setEnableRecommendations] = useState(false);

  const navigation = useNavigation<NavigationProp<'Personalization'>>();

  const handleSavePress = () => {
    // Handle the save logic
    console.log('Save pressed');
    console.log('Enable Notifications:', enableNotifications);
    console.log('Enable Location:', enableLocation);
    console.log('Enable Recommendations:', enableRecommendations);
    navigation.navigate('Home');
  };

  const changeEnableNotifications = (value: boolean) => {
    setEnableNotifications(value);
  };

  const changeEnableLocation = (value: boolean) => {
    setEnableLocation(value);
  };

  const changeEnableRecommendations = (value: boolean) => {
    setEnableRecommendations(value);
  };

  return {
    onSavePress: handleSavePress,
    onChangeEnableNotifications: changeEnableNotifications,
    onChangeEnableLocation: changeEnableLocation,
    onChangeEnableRecommendations: changeEnableRecommendations,
    enableNotifications,
    enableLocation,
    enableRecommendations,
  };
};
