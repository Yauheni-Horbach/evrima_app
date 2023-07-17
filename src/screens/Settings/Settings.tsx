import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {ScreenWrapper} from '@components/ScreenWrapper';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './styles';
import {useSettings} from './useSettings';

const sexData = [
  {key: '1', value: 'woman'},
  {key: '2', value: 'man'},
];

export const Settings = () => {
  const {onSavePress, onInputChange, profileData, isLoading, data, errorText} =
    useSettings();

  return (
    <ScreenWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.textValue}>{data.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.textValue}>{data.email}</Text>
          </View>
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
            <SelectList
              setSelected={(value: string) => onInputChange('sex', value)}
              data={sexData}
              save="value"
              boxStyles={styles.selectList}
              search={false}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Birth Date:</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={
                profileData.birthDate
                  ? new Date(profileData.birthDate)
                  : new Date()
              }
              mode={'date'}
              onChange={(_, date) =>
                onInputChange('birthDate', date?.toDateString() || '')
              }
            />
          </View>
          <Button title="Save Changes" onPress={onSavePress} />
          <Text>{errorText}</Text>
        </>
      )}
    </ScreenWrapper>
  );
};
