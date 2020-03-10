// src/components/Product.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../src/styles/theme.styles';

const Product = (props) => {
  console.log('Product Props', props.navigation.navigate)

  return (
    <View
        image={{uri: props.product.img}}>
        <Text style={styles.name} h2>
            {props.product.name}
        </Text>
        <Text style={styles.price} h4>
            $ {props.product.price}
        </Text>
        <Button
        style={styles.btn}
        type="clear"
        title='Buy now'
        onPress={() => props.navigation.navigate('Details', {
            name: props.product.name,
            price: props.product.price,
            img: props.product.img,
            desc: props.product.desc,
        })} />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    marginVertical:theme.SPACING_SM,
    color: '#111',
    fontFamily: theme.FONT_TITLE_COND,
    fontSize: 17,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 20
  },
  btn: {
    fontSize:1,
    textAlign:'left'
  },
});

export default Product
