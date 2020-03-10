import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <Image
        source={{ uri: props.image }}
        style={styles.bannerImage}/>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    backgroundColor: "#eeeeee",
  },
  bannerImage: {
    backgroundColor: "#eeeeee",
    resizeMode: "cover",
    width: null,
    height: 200,
  },
});

export default Banner
