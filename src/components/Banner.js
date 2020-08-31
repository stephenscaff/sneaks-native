import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import theme from '../../src/styles/theme.styles';


const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <Image
        source={{ uri: props.image }}
        style={styles.bannerImage}
        opacity={props.imageOpacity}/>
        <Text style={styles.bannerText}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    backgroundColor: "#eeeeee",
    position: 'relative',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  bannerImage: {
    backgroundColor: "#eeeeee",
    resizeMode: "cover",
    width: null,
    height: 200,
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
  bannerText: {
    position: 'relative',
    zIndex: 9,
    elevation: 9,
    fontSize: theme.FONT_SIZE_LG,
    color: '#fff'
  },
});

export default Banner
