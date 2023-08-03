import React from 'react';
import {Button, Image, Pressable, Text, TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {ScreenWrapper} from '@components/ScreenWrapper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {icons} from '@ui/index';

import {ImageModal} from './components';
import {styles} from './styles';
import {useSettings} from './useSettings';

const sexData = [
  {key: '1', value: 'woman'},
  {key: '2', value: 'man'},
];

export const Settings = () => {
  const {
    onSavePress,
    onInputChange,
    profileData,
    isLoading,
    errorText,
    changeStateModal,
    isModalOpen,
    changeImage,
    image,
  } = useSettings();

  return (
    <ScreenWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.row}>
            <Pressable style={styles.circle} onPress={changeStateModal}>
              {image && <Image source={{uri: image}} style={styles.image} />}
              {!image && <Image source={icons.plus} style={styles.icon} />}
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={profileData.name}
              onChangeText={value => onInputChange('name', value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={value => onInputChange('email', value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Current password:</Text>
            <TextInput
              style={styles.input}
              value={profileData.password}
              onChangeText={value => onInputChange('password', value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>New password:</Text>
            <TextInput
              style={styles.input}
              value={profileData.newPassword}
              onChangeText={value => onInputChange('newPassword', value)}
            />
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
          <ImageModal
            isModalOpen={isModalOpen}
            changeStateModal={changeStateModal}
            changeImage={changeImage}
          />
        </>
      )}
    </ScreenWrapper>
  );
};
