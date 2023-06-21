import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import {styles} from './styles';
import {GOOGLE_MAPS_KEY} from '@env';
import {useNewTravel} from './useNewTravel';
import Animated from 'react-native-reanimated';

export const NewTravel = () => {
  const {onStartPress, onInputChange, profileData, isLoading} = useNewTravel();

  return (
    <View style={styles.container}>
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
              fetchDetails
              onPress={(_, details = null) => {
                console.log(JSON.stringify(details?.geometry?.location));
                onInputChange('location', details?.place_id || '');
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
          <Animated.View
            style={styles.containerMap}
            sharedTransitionTag="mapTag">
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
          <Button title="Let's start" onPress={onStartPress} />
        </>
      )}
    </View>
  );
};
