import {GOOGLE_MAPS_KEY} from '@env';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {styles} from './styles';
import {useNewTravel} from './useNewTravel';
import {ScreenWrapper} from '@components/ScreenWrapper';

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
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3',
              ]}
              fetchDetails
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
              minZoomLevel={7}></MapView>
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
