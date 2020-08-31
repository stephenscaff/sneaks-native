import React from 'react';
import { View, Text,  Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import BackHeader from '../components/BackHeader';
import ImageScroller from '../components/ImageScroller';
import SizePicker from '../components/SizePicker';
import ProductScroller from '../components/ProductScroller';
import AppFooter from '../components/AppFooter';
import theme from '../../src/styles/theme.styles'
const BASE_URL = 'https://raw.githubusercontent.com/stephenscaff/demo-content/master/images/shoes/';


const relatedProducts = [
  {
    name: 'ETQ LT 01 Black',
    price: 220,
    img: `${BASE_URL}/etq-black-1.jpg`,
    desc: 'Handmade in Portugal from premium nappa leather. Full calf-skin lining. Getcha grown-up on.',
    featured_images: [
      `${BASE_URL}/etq-black-1.jpg`,
      `${BASE_URL}/etq-alloy.jpg`,
      `${BASE_URL}/etq-black-highs.jpg`
    ]
  },
    {
    name: 'ETQ MT 01 Alloy',
    price: 120,
    img: `${BASE_URL}/etq-alloy.jpg`,
    desc: 'MT 02 (mid top 2) is a luxurious interpretation of 1980s basketball silhouettes, featuring a premium nubuck leather upper, a layered leather insole, leather toecap, and nylon laces. The outsole is made from natural rubber, featuring a custom-made rugged profile for extra grip.',
    featured_images: [
      `${BASE_URL}/etq-alloy.jpg`,
      `${BASE_URL}/etq-grey.jpg`,
      `${BASE_URL}/etq-cement.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Brown',
    price: 160,
    img: `${BASE_URL}/etq-brown.jpg`,
    desc: 'MT 02 (mid top 2) is a luxurious interpretation of 1980s basketball silhouettes, featuring a premium nubuck leather upper, a layered leather insole, leather toecap, and nylon laces. The outsole is made from natural rubber, featuring a custom-made rugged profile for extra grip.3',
    featured_images: [
      `${BASE_URL}/etq-brown.jpg`,
      `${BASE_URL}/etq-fig.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Whites',
    price: 110,
    img: `${BASE_URL}/etq-white.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-white.jpg`,
      `${BASE_URL}/etq-knitted-white.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Cement',
    price: 110,
    img: `${BASE_URL}/etq-cement.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-cement.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
      `${BASE_URL}/etq-grey.jpg`,
    ]
  },
];


function ProductDetailScreen({route, props, navigation}) {
  const { img, price, name, desc, featured_images } = route.params;

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
            <Text style={styles.productSubTitle}>
              Product Details
            </Text>
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
          <ProductScroller
            data={relatedProducts}
            navigation={navigation}
            title={'Related Sneaks'} />
            <AppFooter />
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
  productSubTitle: {
    fontFamily: theme.FONT_TITLE_MED,
    fontSize: theme.FONT_SIZE_MED,
    marginBottom: theme.SPACING_LG,
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
