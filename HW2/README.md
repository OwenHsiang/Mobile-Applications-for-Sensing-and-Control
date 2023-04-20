# EEP_523_HW2

## Overview
The goal of this assignment is to continue exploring React Native and to practice accessing native features and APIs in React Native, creating a camera app that allows the user to take a photo and blur it in the photo. The user can then undo the blur or save the blurred photo to their camera roll.

## How the app works
To explain how my app works, I would like to briefly introduce that how did I build it. 
1. First, create a new React Native project using the React Native CLI, here I named the project "HW2". 
2. After creating the project, install 'react-native-image-picker', 'react-native-camera-roll', and 'react-native-image-viewing' to use these modules. Remember to add the required permissions else it might works unproperly. 
3. Eventually open `App.tsx` and start programming.

To run the app, follow these steps:
1. Press the button `Take a Photo` to launch the device's camera. In the camera interface, users can change the camera from back to front and vice versa. 
2. Once the photo is taken, the app displays the image and provides the option to save the photo to the device's camera roll via pressing `Save photo`. 
3. The user can then choose to blur the face in the photo by pressing the `Blur` button. This action sets the blurred version of the photo as the new image and removes the original image from the screen. 
4. The user can undo the blur by pressing the `Undo Blur` button, which replaces the blurred photo with the original photo.


## Hours took
It took me approximately 24 hours to create this app, spending most of the time installing the necessary modules and adding permissions to it.

## Challenging parts
The most challenging part of creating this app was installing React Native modules and adding permissions. Since the instructions online are usually older versions, it causes some issues that some commands are not required or even wrong. Moreover, I initialized the whole file so many times since if something goes wrong, I can not build the environment or even lauch the React Native. It turns out that one of the issues is that the permissions should be added in "debug" file but not "main" file, can't explain why but when I fixed then it works.

## References<br>
[React Native Image Picker](https://github.com/react-native-image-picker/react-native-image-picker)<br>
[React Native Camera Roll](https://github.com/react-native-cameraroll/react-native-cameraroll)<br>
[React Native Image Viewing](https://github.com/jobtoday/react-native-image-viewing)<br>
[React Native PermissionsAndroid](https://reactnative.dev/docs/permissionsandroid)<br>
