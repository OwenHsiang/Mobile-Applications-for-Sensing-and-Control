# EEP_523_HW3

## Overview
The goal of this assignment is to continue exploring React Native and to practice accessing native features and APIs in React Native, creating a new React Native app that allows the user to search for and display information about a location using the OpenWeatherMap API. You can see the result of this project in "HW3/hw3_demo.mp4".

## How the app works
To run the app, follow these steps:
1. Grant permission to the weather application to access your device's location.
2. Input the name of the city you wish to search for in the Text Input Component.
3. It will show 6 components: City Name, Weather icon, Weather Condition, Current Temp, Min Temp, and Max Temp.
4. Notice that if the user enters a wrong name which is unrecognized, it would alert an error message.


## Hours took
It took me approximately 12 hours to create this app.

## Challenging parts
The most challenging part of creating this app was using `axios` to get the infromation from the website since it is my first time using this function. Moreover, I decided to get the current location from latitude and longitude, hence I have to create the variable to get the values from the website, and then eventually get more information based on the corresponding location.

## References<br>
[React Native Weather API](https://www.npmjs.com/package/react-native-weather-api?activeTab=code)<br>
[GeoLocation in React Native](https://reactnative.dev/docs/0.63/geolocation#:~:text=Geolocation%20is%20enabled%20by%20default,'Capabilities'%20tab%20in%20Xcode.)<br>
[OpenWeatherMap](https://openweathermap.org/)<br>

