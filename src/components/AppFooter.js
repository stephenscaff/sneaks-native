import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../src/styles/theme.styles';
import brandImage from '../assets/images/ebay.png';
import lionImage from '../assets/images/leo.png';

let currentYear = new Date().getFullYear();

const AppFooter = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={ styles.footerLogo}>
        <Text style= {styles.footerLogoText}>Sneaks.</Text>
      </TouchableOpacity>
      <Text style = {styles.footerBio}>
        Discover and hustle up new and hard to find sneakers, eBay mode.
      </Text>
      <View style={styles.footerNav}>
        <TouchableOpacity style={ styles.footerLink}>
          <Text style={styles.footerLinkText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.footerLink}>
          <Text style={styles.footerLinkText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.footerLink}>
          <Text style={styles.footerLinkText}>Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.footerLink}>
          <Text style={styles.footerLinkText}>Best Sellers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.footerLink}>
          <Text style={styles.footerLinkText}>About</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={ styles.footerBrand}>
        <Image
          source={brandImage}
          style={styles.footerBrandImage}/>
      </TouchableOpacity>
        <Text style={styles.footerYear}>©{currentYear}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
		backgroundColor: "#fff",
    width: '100%',
    paddingHorizontal: theme.PADDING_GRID,
    paddingTop:theme.SPACING_XXL,
    paddingBottom: 100,
	},
	footerLogoText: {
    fontSize: 20,
    fontFamily: theme.FONT_TITLE_BOLD,
    marginBottom: 20,
  },
  footerBio: {
    maxWidth: 250,
    paddingBottom: theme.SPACING_MED,
    fontFamily:theme.FONT_BASE,
    lineHeight: 20,
  },
  footerNav: {
    paddingTop: theme.SPACING_MED,
    paddingBottom: theme.SPACING_MED,
  },
  footerLink: {
    paddingVertical:10,
  },
  footerLinkText: {
    fontSize: 18,
    fontFamily: theme.FONT_BASE,
  },
  footerBrand: {
    paddingTop: theme.SPACING_LG,
    paddingBottom: theme.SPACING_LG,
  },
	footerBrandImage: {
		resizeMode: "center",
	},
  footerYear: {
    fontFamily: theme.FONT_BASE,
    fontSize: theme.FONT_SIZE_MED,
  }
});

export default AppFooter
