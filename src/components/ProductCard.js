import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../src/styles/theme.styles.js'

const ProductCard = (props) => {
  return (
    <View style={ styles.productCard }>
      <TouchableOpacity
        style={ styles.productCardLink }
        onPress={() => props.navigation.push('ProductDetail', {
            name: props.product.name,
            price: props.product.price,
            img: props.product.img,
            desc: props.product.desc,
            featured_images: props.product.featured_images,
            key: Math.random () * 10000
          })}>
        <View style={ styles.productCardImageWrap }>
        <Image
          source={{ uri: props.product.img }}
          style={ styles.productCardImage }/>
        </View>
        <View style={styles.productCardContent}>
          <Text style={styles.productCardTitle}>{props.product.name}</Text>
          <Text style={styles.productCardPrice}>$ {props.product.price}</Text>
        </View>
        </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  productCardLink: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  productCardImageWrap: {
    position: 'relative',
    height: 150,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
    borderRadius: 4,
  },
  productCardImage: {
    position: 'absolute',
    width: '100%',
    height: 175,
    top: -25,
    resizeMode: 'center',
  },
  productCardContent: {
    paddingHorizontal: theme.PADDING_SM,
    paddingVertical: theme.PADDING_LG,
  },
  productCardTitle: {
    fontFamily: theme.FONT_TITLE_MED,
    fontSize: theme.FONT_SIZE_MED,
    marginBottom: 10,
  },
  productCardPrice: {
    fontFamily: theme.FONT_TITLE_MED,
    fontSize: theme.FONT_SIZE_MED,
    color: '#888',
  },
})

export default ProductCard
