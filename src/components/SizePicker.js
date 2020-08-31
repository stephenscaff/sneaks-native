import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../src/styles/theme.styles';

const availableSizes = [
  '9','10','11','12','13'
]

class SizePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  handlePress(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <View style={styles.gridOffset}>
        <ScrollView
          style={styles.container}
          horizontal
          decelerationRate='slow'
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          contentInset={{ right: 40 }}
        >
        {
          availableSizes.map((size, index) => {
            return(
              <TouchableOpacity
                onPress={() => this.handlePress(index)}
                key={index}
                style={
                  [
                    styles.button,
                    this.state.activeIndex === index
                    ? styles.buttonActive
                    : styles.buttonStatic
                  ]
                }
                >
                <Text style={styles.buttonText}>{size}</Text>
              </TouchableOpacity>
            )
          })
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gridOffset: {
    marginHorizontal: -theme.PADDING_GRID,
  },
  container: {
    paddingVertical: theme.SPACING_LG,
    paddingLeft:theme.PADDING_GRID,
    paddingRight:theme.PADDING_GRID * 4,
    marginBottom:theme.SPACING_LG,
  },
  button: {
    width: 100,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 6,
    fontFamily: theme.FONT_TITLE_COND,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign:'center',
    color: '#bbb',
    backgroundColor: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 120,
  },
  buttonActive: {
    color: '#fff',
    backgroundColor: '#111',
    borderColor: '#111',
  },
  buttonStatic: {
    opacity: 0.95,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: theme.FONT_TITLE_COND,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign:'center',
    color: '#ddd',
  }
});

export default SizePicker
