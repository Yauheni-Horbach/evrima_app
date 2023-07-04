import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 10}}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 10}}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 10}}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 10}}>Swipe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 10}}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
