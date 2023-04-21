import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from './nearbyjobs.style'
import { images } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
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
      </View>

      <View>
        <NearbyJobCard photoUrl={images.bodrum}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, Bodrum </Text>
      </View>

      <View>
        <NearbyJobCard photoUrl={images.izmir}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, İzmir </Text>
      </View>

      <View>
        <NearbyJobCard photoUrl={images.istanbul}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, İstanbul </Text>
      </View>

      <View>
        <NearbyJobCard photoUrl={images.ankara}></NearbyJobCard>
        <Text style={styles.headerTitle}>Turkey, Ankara </Text>
      </View>

    </View>
  )
}

export default Nearbyjobs