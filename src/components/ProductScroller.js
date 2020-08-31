import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import theme from '../../src/styles/theme.styles';

const ProductScroller = (props) => {
  console.log('data', props.navigation)
  return (
    <>
      <View style={styles.productScroller}>
        <Text style={styles.productScrollerTitle}>{props.title}</Text>

        <View style={styles.gridOffset}>
          <ScrollView
            style={styles.productScrollerItems}
            horizontal
            decelerationRate='slow'
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            contentInset={{ right: 10}}
          >
            {
              props.data.map((product, index) => {
                return(
                  <View style={styles.productScrollerItem} key={index}>
                    <ProductCard product={product} navigation={props.navigation}/>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  productScroller: {
    paddingTop: theme.SPACING_MED,
    paddingBottom: theme.SPACING_XL,
  },
  productScrollerTitle: {
    paddingHorizontal: theme.PADDING_GRID,
    marginBottom: theme.SPACING_MED,
    fontFamily: theme.FONT_TITLE_COND,
    fontSize: theme.FONT_SIZE_LG,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  gridOffset: {
    marginHorizontal: -theme.PADDING_GRID,
  },
  productScrollerItems: {
    marginVertical: theme.SPACING_LG,
    paddingLeft:theme.PADDING_GRID*2,
    paddingRight:theme.PADDING_GRID * 4,
  },
  productScrollerItem: {
    width: 175,
    marginRight: 10,

    resizeMode: 'center',
  },
});

export default ProductScroller
