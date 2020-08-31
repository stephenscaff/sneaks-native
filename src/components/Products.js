import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import theme from '../../src/styles/theme.styles';

const Products = (props) => {

  return (
    props.data.map((product, index) => {
      return(
        <View  style={styles.col} key={index}>
          <ProductCard product={product} navigation={navigation}/>
        </View>
      )
    })
  );
}

const styles = StyleSheet.create({});

export default Products
