import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {styles} from './styles';
import {usePersonalization} from './usePersonalization';

export const Personalization = () => {
  const {onSavePress, onInputChange, profileData} = usePersonalization();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Surname:</Text>
        <TextInput
          style={styles.input}
          value={profileData.surName}
          onChangeText={value => onInputChange('surName', value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Sex:</Text>
        <TextInput
          style={styles.input}
          value={profileData.sex}
          onChangeText={value => onInputChange('sex', value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Birth Date:</Text>
        <TextInput
          style={styles.input}
          value={profileData.birthDate}
          onChangeText={value => onInputChange('birthDate', value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={profileData.location}
          onChangeText={value => onInputChange('location', value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Avatar:</Text>
        <TextInput
          style={styles.input}
          value={profileData.avatar}
          onChangeText={value => onInputChange('avatar', value)}
        />
      </View>
      <Button title="Save Changes" onPress={onSavePress} />
    </View>
  );
};
