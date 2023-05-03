import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, PermissionsAndroid, Alert, Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

// define API_KEY from openweathermap
const API_KEY = "262a5c87ab771853f4a1321959f7d675";

const App = () => {
  const [location, setLocation] = useState('Seattle');
  const [currentWeather, setCurrentWeather] = useState(null); // Weather conditions 
  const [currenticon, setCurrenticon] = useState(null); // Weather conditions 
  const [curTemp, setCurTemp] = useState(null); // Current temperature
  const [minTemp, setMinTemp] = useState(null); // minimum temperature
  const [maxTemp, setMaxTemp] = useState(null); // maximum temperature
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
    } catch (error) {
      console.error(error);
      setError('Invalid location. Please try again.');
    }
  };

  useEffect(() => {

    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Weather App Location Permission',
            message:
              'Weather App needs access to your location ' +
              'to show the weather for your current location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              fetchWeatherData(latitude, longitude);
            },
            error => {
              console.log(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
          .then(response => {
            const { main, weather } = response.data;
            setCurrentWeather(weather[0].description);
            setCurrenticon(weather[0].icon);
            setCurTemp(main.temp);
            setMinTemp(main.temp_min);
            setMaxTemp(main.temp_max);
          })
          .catch(error => { console.log(error); Alert.alert("Can not find the location, please check again.") });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const handleSearch = () => {
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
      .then(response => {
        const { main, weather } = response.data;
        setCurrentWeather(weather[0].description);
        setCurrenticon(weather[0].icon);
        setCurTemp(main.temp);
        setMinTemp(main.temp_min);
        setMaxTemp(main.temp_max);
      })
      .catch(error => { console.log(error); Alert.alert("Can not find the location, please check again.") });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>HW3_OpenWeatherMap  </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, padding: 10 }}
          onChangeText={text => setLocation(text)}
          value={location}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>{location}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'gold' }}>{currentWeather}</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: `https://openweathermap.org/img/wn/${currenticon}@2x.png`
          }}
        />
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Text style={{ fontSize: 16, color: 'green' }}>Current Temp</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>{curTemp} °C</Text>
          </View>
          <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Text style={{ fontSize: 16, color: 'blue' }}>Min Temp</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>{minTemp} °C</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'red' }}>Max Temp</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>{maxTemp} °C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;