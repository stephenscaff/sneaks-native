import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import theme from '../../src/styles/theme.styles';

const Heading = (props) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: theme.SPACING_LG,
    paddingBottom: theme.SPACING_SM,
    paddingHorizontal: theme.PADDING_GRID,
    backgroundColor: theme.COLOR_SOFT_BG,
  },
  headingTitle: {
    fontFamily: theme.FONT_TITLE_COND,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: theme.FONT_SIZE_LG,
  },
});

export default Heading
