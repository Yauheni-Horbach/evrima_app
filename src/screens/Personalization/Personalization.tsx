import React from 'react';
import {View, Text, Button} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from './styles';
import {usePersonalization} from './usePersonalization';

export const Personalization = () => {
  const {
    onSavePress,
    onChangeEnableNotifications,
    onChangeEnableLocation,
    onChangeEnableRecommendations,
    enableNotifications,
    enableLocation,
    enableRecommendations,
  } = usePersonalization();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalization Settings</Text>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          isChecked={enableNotifications}
          onPress={onChangeEnableNotifications}
        />
        <Text style={styles.label}>Enable Notifications</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          isChecked={enableLocation}
          onPress={onChangeEnableLocation}
        />
        <Text style={styles.label}>Enable Location</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          isChecked={enableRecommendations}
          onPress={onChangeEnableRecommendations}
        />
        <Text style={styles.label}>Enable Recommendations</Text>
      </View>
      <Button title="Save" onPress={onSavePress} />
    </View>
  );
};
