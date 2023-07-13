import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {ScreenWrapper} from '@components/ScreenWrapper';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './styles';
import {useSettingsCurrentTravel} from './useSettingsCurrentTravel';

export const SettingsCurrentTravel = () => {
  const {onStartPress, onInputChange, profileData, isLoading} =
    useSettingsCurrentTravel();

  return (
    <ScreenWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <Text>Settings</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Travel name: </Text>
            <TextInput
              style={styles.input}
              value={profileData.name}
              onChangeText={value => onInputChange('name', value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Start Date:</Text>
            <DateTimePicker
              minimumDate={new Date()}
              maximumDate={
                profileData.endDate ? new Date(profileData.endDate) : undefined
              }
              value={
                profileData.startDate
                  ? new Date(profileData.startDate)
                  : new Date()
              }
              mode={'date'}
              onChange={(_, date) => {
                onInputChange('startDate', date?.toDateString() || '');
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>End Date:</Text>
            <DateTimePicker
              minimumDate={
                profileData.startDate
                  ? new Date(profileData.startDate)
                  : new Date()
              }
              value={
                profileData.endDate ? new Date(profileData.endDate) : new Date()
              }
              mode={'date'}
              onChange={(_, date) => {
                onInputChange('endDate', date?.toDateString() || '');
              }}
            />
          </View>
          <Button title="Change" onPress={onStartPress} />
        </>
      )}
    </ScreenWrapper>
  );
};
