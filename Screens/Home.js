import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../Components/Home/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#87AFC7',
            marginTop: 20,
          }}>
          Welcome to Facial Expression recognition App
        </Text>
      </View>
      <View>
        <Text style={{marginTop: 15, color: 'black', marginHorizontal: 5}}>
          Press next to check your mood
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CameraScreen')}
        style={{
          marginTop: 30,
          borderRadius: 30,
          backgroundColor: 'blue',
          width: '90%',
          height: 40,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white', alignSelf: 'center'}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
