import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  Button,
  Platform,
  Vibration,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import styles from './nearbyjobs.style'
import { images } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>All Holidays are listed below.</Text>
        
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        <NearbyJobCard photoUrl={images.antalya}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, Antalya </Text>
        <Button title="See the details." onPress={() => Vibration.vibrate()} />
      </View>

      <View>
        <NearbyJobCard photoUrl={images.bodrum}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, Bodrum </Text>
        <Button title="See the details." onPress={() => Vibration.vibrate()} />
      </View>

      <View>
        <NearbyJobCard photoUrl={images.izmir}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, İzmir </Text>
        <Button title="See the details." onPress={() => Vibration.vibrate()} />
      </View>

      <View>
        <NearbyJobCard photoUrl={images.istanbul}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, İstanbul </Text>
        <Button title="See the details." onPress={() => Vibration.vibrate()} />
      </View>

      <View>
        <NearbyJobCard photoUrl={images.ankara}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, Ankara </Text>
        <Button title="See the details." onPress={() => Vibration.vibrate()} />
      </View>

    </View>
  )
}

export default Nearbyjobs