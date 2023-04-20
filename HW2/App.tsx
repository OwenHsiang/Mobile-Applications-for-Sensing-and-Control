import React, { useState, useEffect } from 'react';
import { View, Button, Image, PermissionsAndroid, StyleSheet } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import ImageViewing from 'react-native-image-viewing';

var ImagePicker = require('react-native-image-picker');

const App = () => {
  const [imageUri, setImageUri] = useState('');
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [blur_radius, setblur] = useState(0);

  useEffect(() => {
    requestCameraPermission();
    requestGalleryPermission();
  }, []);

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'App needs access to your local gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Gallery permission granted');
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const savePhoto = async () => {
    try {
      await CameraRoll.save(imageUri, { type: 'photo' });
      console.log('Photo saved to camera roll');
    } catch (error) {
      console.log('An error occurred while saving the photo', error);
    }
  };

  const takePhoto = async () => {
    ImagePicker.launchCamera({ title: 'Take a Photo' }, (response: { didCancel: any; error: any; uri: React.SetStateAction<string>; }) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        setImageUri(response.assets[0].uri);

      }
    });
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
      textAlign: 'center',
    },
    image: {
      alignSelf: 'center',
      height: 300,
      width: 300,
    },
    separator: {
      marginVertical: 10,
    },
  });


  return (
    <View>
      <Button title="Take a Photo" color="green" onPress={takePhoto} />
      {imageUri !== '' && (
        <View>
          <Image source={{ uri: imageUri }} style={styles.image} blurRadius={blur_radius} />
          <Button title="Blur" color="tan" onPress={() => setblur(10)} />

          <Button title="Undo" color="darkgoldenrod" onPress={() => setblur(0)} />

          <Button title="Save photo" color="crimson" onPress={savePhoto} />
          <ImageViewing
            images={[{ uri: imageUri }]}
            imageIndex={0}
            visible={isImageViewVisible}
            onRequestClose={() => setIsImageViewVisible(false)}
          />
        </View>

      )}

    </View>
  );
};

export default App;
