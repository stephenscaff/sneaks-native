import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../src/styles/theme.styles';
import backIconImage from '../assets/images/icon-back.png';
import brandImage from '../assets/images/ebay.png';
import menuIconImage from '../assets/images/icon-menu.png';

const BackHeader = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={ styles.headerBackTrigger}
        onPress={() => props.navigation.goBack()}>
      <Image
        source={backIconImage}
        style={styles.headerBackTriggerImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.brand}>
        <Image
          source={brandImage}
          style={styles.headerBrandImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.headerMenuTrigger}>
        <Image
          source={menuIconImage}
          style={styles.headerMenuTriggerImage}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
		backgroundColor: "#fff",
		height: 70,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {height: 2},
    elevation: 9,
    zIndex: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop:Constants.statusBarHeight,
	},
  headerBackTrigger: {
    marginRight: 'auto',
    paddingVertical: 40,
    width: 40,
  },
	headerBrandImage: {
		resizeMode: "center",
		alignSelf: "center",
	},
  headerMenuTrigger: {
    marginLeft: 'auto',
  }
});

export default BackHeader
