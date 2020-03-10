import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../src/styles/theme.styles';
import brandImage from '../assets/images/ebay.png';
import menuIconImage from '../assets/images/icon-menu.png';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={ styles.headerSearchTrigger}>
        <Text style={styles.headerSearchTriggerText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.headerBrand}>
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
    elevation: 9,
    zIndex: 9,
		height: 70,
    width: '100%',
    paddingHorizontal: theme.PADDING_GRID,
    marginTop:Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {height: 2},
	},
  headerSearchTrigger: {
    marginRight: 'auto',
  },
  headerSearchTriggerText: {
    fontFamily: theme.FONT_TITLE,
    fontSize: 14,
  },
	headerBrandImage: {
		resizeMode: "center",
		alignSelf: "center",
	},
  headerMenuTrigger: {
    marginLeft: 'auto',
  }
});

export default AppHeader
