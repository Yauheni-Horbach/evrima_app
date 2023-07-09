import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Circle} from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {ScreenWrapper} from '@components/ScreenWrapper';
import {GOOGLE_MAPS_KEY} from '@env';
import {Slider} from '@miblanchard/react-native-slider';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './styles';
import {useNewTravel} from './useNewTravel';

export const NewTravel = () => {
  const {onStartPress, onInputChange, profileData, isLoading} = useNewTravel();

  return (
    <ScreenWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <>
          <View style={styles.row}>
            <Text style={styles.label}>Travel name: </Text>
            <TextInput
              style={styles.input}
              value={profileData.name}
              onChangeText={value => onInputChange('name', value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Location:</Text>
            <GooglePlacesAutocomplete
              GooglePlacesDetailsQuery={{fields: 'geometry'}}
              placeholder="Search"
              filterReverseGeocodingByTypes={['locality']}
              fetchDetails
              minLength={3}
              onPress={(data, details = null) => {
                onInputChange(
                  'location',
                  data?.structured_formatting.main_text || '',
                );
                onInputChange('coordinates', {
                  lat: details?.geometry?.location?.lat || 0,
                  lng: details?.geometry?.location?.lng || 0,
                });
              }}
              query={{
                key: GOOGLE_MAPS_KEY,
                language: 'en',
              }}
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
          {profileData.coordinates.lat || profileData.coordinates.lng ? (
            <View style={styles.row}>
              <Text style={styles.label}>Radius:</Text>
              <Text style={styles.label}>{profileData.radius}</Text>
              <View style={styles.containerSlider}>
                <Slider
                  value={profileData.radius}
                  minimumValue={1000}
                  maximumValue={10000}
                  step={100}
                  onValueChange={value => {
                    onInputChange('radius', value[0]);
                  }}
                />
              </View>
            </View>
          ) : null}
          <Animated.View style={styles.containerMap}>
            <MapView
              style={styles.map}
              region={{
                latitude: profileData.coordinates.lat,
                longitude: profileData.coordinates.lng,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
              mapType="mutedStandard"
              minZoomLevel={10}>
              {profileData.coordinates.lat || profileData.coordinates.lng ? (
                <Circle
                  center={{
                    latitude: profileData.coordinates.lat,
                    longitude: profileData.coordinates.lng,
                  }}
                  radius={profileData.radius}
                />
              ) : null}
            </MapView>
          </Animated.View>
          <Button
            disabled={!(profileData.location || profileData.name)}
            title="Let's start"
            onPress={onStartPress}
          />
        </>
      )}
    </ScreenWrapper>
  );
};
