import React from 'react';
import { View, Text,  Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import BackHeader from '../components/BackHeader';
import ImageScroller from '../components/ImageScroller';
import SizePicker from '../components/SizePicker';
import theme from '../../src/styles/theme.styles'

import backIconImage from '../assets/images/icon-back.png';

function ProductDetailScreen({route, props, navigation}) {
  const { img } = route.params;
  const { featured_images } = route.params;
  const { price } = route.params;
  const { name } = route.params;
  const { desc } = route.params;

  return (
    <>
      <View style={{ backgroundColor: '#fff', paddingBottom: 100}}>
        <BackHeader navigation={navigation}/>
        <ScrollView>
          <ImageScroller data={featured_images}/>
          <View style={styles.productInfo}>
            <Text style={styles.productPrice} h2>
              $ {price}
            </Text>
            <Text style={styles.productName} h3>
              {name}
            </Text>
            <SizePicker/>
            <Text style={styles.productDesc}>
              {desc}
            </Text>
            <TouchableOpacity>
              <Text style={styles.cartBtn}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.cartBtn, styles.cartBtnInvert]}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  productBanner: {
    height: 500,
    width: '100%',
  },
  productImage: {
    height: 500,
    width: '100%',
  },
  productInfo: {
    paddingTop: theme.SPACING_LG,
    paddingBottom: 50,
    paddingHorizontal: theme.PADDING_GRID,
  },
  productPrice: {
    marginBottom: theme.SPACING_LG,
    fontFamily: theme.FONT_TITLE_COND,
    letterSpacing: theme.FONT_TITLE_COND_SPACING,
    fontSize: theme.FONT_SIZE_XL,
  },
  productName: {
    fontFamily: theme.FONT_TITLE_COND,
    fontSize: theme.FONT_SIZE_XL,
    letterSpacing: theme.FONT_TITLE_COND_SPACING,
    textTransform: 'uppercase',
    marginBottom: theme.SPACING_MED,
    color: '#999',
  },
  productDesc: {
    marginBottom: 40,
    fontFamily: 'graphik',
    lineHeight: 18,
  },
  cartBtn: {
    width: '100%',
    marginBottom: 10,
    paddingVertical: 12,
    fontFamily: theme.FONT_TITLE_COND,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign:'center',
    color: '#fff',
    backgroundColor: '#111',
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: theme.FONT_TITLE_COND,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign:'center',
    color: '#fff',
  },
  cartBtnInvert: {
    color: '#111',
    backgroundColor: '#fff',
    borderColor: '#111',
  },
});
export default ProductDetailScreen;
