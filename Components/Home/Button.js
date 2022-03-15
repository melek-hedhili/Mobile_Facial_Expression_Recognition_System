import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, navigation}) => {
  return (
    <TouchableOpacity
      onPress={navigation.navigate('LoadingScreen')}
      style={{
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: 'blue',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{color: 'white', alignSelf: 'center'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
