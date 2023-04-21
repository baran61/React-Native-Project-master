import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({photoUrl, handlePress}) => {
  return (
    <TouchableOpacity  onPress={handlePress}>
      <Image
        source={photoUrl}
        resizeMode="contain"
        style={{ width: 200, height: 150 }} 
        
      />
    </TouchableOpacity>
  )
}

export default NearbyJobCard