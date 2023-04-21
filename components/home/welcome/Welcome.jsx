import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  StyleSheet
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import {icons, SIZES} from '../../../constants';
import * as Location from 'expo-location';


const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();

  //For Geolocation https://docs.expo.dev/versions/latest/sdk/location/
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Baran, Welcome back</Text>
        <Text style={styles.welcomeMessage}>Find Your perfect Holiday !</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            type="search"
            placeholder="What are you looking for ?"
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress= {handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.userName}> Your Current Location is :</Text>
        <Text style={styles.paragraph}>{text}</Text> 
      </View>

      

      
    

    </View>
  )
}

export default Welcome