import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import filtersIconImage from '../assets/images/icon-filters.png';

const FilterBar = () => {
  return (
    <View style={ styles.filterBar}>
      <View style={ styles.filterBarCrumbs }>
        <TouchableOpacity style={ styles.filterBarCrumbsLink }>
          <Text style={styles.filterBarCrumbsText}>MENS</Text>
        </TouchableOpacity>
        <Text style={styles.filterBarCrumbsSep}>•</Text>
        <TouchableOpacity style={ styles.filterBarCrumbsLink }>
          <Text style={styles.filterBarCrumbsText}>ETQ</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={ styles.filterBarIcon }>
        <Image
          source={ filtersIconImage }
          style={ styles.filterBarIconImage }/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  filterBar: {
    elevation: 9,
    zIndex: 9,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  filterBarCrumbs: {
    flexDirection: 'row'
  },
  filterBarCrumbsText: {
    fontFamily: "knockout",
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#111',
  },
  filterBarCrumbsSep: {
    paddingHorizontal: 10,
  },
  filterBarCrumbsLink: {
    color: '#111'
  },
})

export default FilterBar
