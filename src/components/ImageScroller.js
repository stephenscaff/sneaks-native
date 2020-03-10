import React from 'react';
import { Dimensions, View, Image, StyleSheet, ScrollView } from 'react-native';
import theme from '../../src/styles/theme.styles';

const CARD_WIDTH = Dimensions.get('window').width
const CARD_HEIGHT = Dimensions.get('window').height * 0.7
console.log(CARD_WIDTH)
const ImageScroller = (props) => {
  console.log('data', props.data)
  return (
    <ScrollView
      style={styles.imageScroller}
      horizontal
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustContentInsets={false}
      snapToInterval={CARD_WIDTH}
      snapToAlignment='left'
      decelerationRate='fast'
    >
    {
      props.data.map((item, index) => {
        return(
          <Image
            style={styles.imageScrollerImage}
            source={{uri: item}}
            key={index}
          />
        )
      })
    }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageScroller: {
    backgroundColor: theme.COLOR_SOFT_BG,
    height: 400,
    margin:0,
  },
  imageScrollerImage: {
    width: CARD_WIDTH,
    resizeMode: 'center',
    backgroundColor: '#ececec',
  },
});

export default ImageScroller
