import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
const path =
  'https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/switch-camera-icon-17-256.png';

const CameraScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [smiling, setSmiling] = useState();
  const [Switch, setSwitch] = useState(RNCamera.Constants.Type.front);
  const [Condition, setCondition] = useState(false);
  const SwitchCam = () => {
    if (Condition == false) {
      setSwitch(RNCamera.Constants.Type.back);
      setCondition(true);
    } else {
      setSwitch(RNCamera.Constants.Type.front);
      setCondition(false);
    }
  };
  const final = () => {
    const expression = smiling[0];

    if (expression > 0.9) {
      return 'joy';
    } else if (expression <= 0.4 && expression >= 0.2) {
      return 'smiling';
    } else if (expression >= 0.005 && expression <= 0.09) {
      return 'neutral';
    } else {
      return 'sadness';
    }
  };

  const switching = () => {
    if (Condition == false) {
      setSwitch(RNCamera.Constants.Type.back);
      setCondition(true);
    } else {
      setSwitch(RNCamera.Constants.Type.front);
      setCondition(false);
    }
  };

  const getFaceDataView = () => {
    //console.log('smile', smiling[0]);

    if (data == 0) {
      return (
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            margin: 16,
          }}>
          <Text style={{fontSize: 20, color: 'red'}}>NO FACE DETECTED</Text>
        </View>
      );
    } else if (data) {
      return (
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            margin: 16,
          }}>
          <Text style={{fontSize: 20, color: 'green'}}>{final()}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            margin: 16,
          }}>
          <Text style={{fontSize: 20, color: 'blue'}}>NOTHING</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        type={Switch}
        style={StyleSheet.absoluteFill}
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications.all
        }
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.none}
        faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
        onFacesDetected={face => {
          setData(face.faces);
          setSmiling(data.map(items => items.smilingProbability));
        }}>
        {getFaceDataView()}
      </RNCamera>
      <TouchableOpacity
        onPress={() => SwitchCam()}
        style={{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 30,
          marginHorizontal: 5,
          marginVertical: 5,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/switch.png')}
          style={styles.tinyLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  tinyLogo: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});
