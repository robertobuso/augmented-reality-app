import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';

class MainTitle extends Component {

  render() {
    return (
      <Text style={localStyles.titleText}>
        They May Cut All the{' '}
        <Text style={localStyles.flowerText}>
          Flowers
        </Text>
        <Text style={localStyles.titleText}>
          ...
        </Text>
      </Text>
    )
  }
}

const localStyles = StyleSheet.create({
  titleText: {
  paddingTop: 30,
  paddingBottom: 20,
  color:'#fff',
  textAlign:'center',
  fontSize : 45,
  fontFamily : 'Optima'
},
flowerText: {
  paddingTop: 30,
  paddingBottom: 20,
  color:'#FF0000',
  textAlign:'center',
  fontSize : 45,
  fontFamily : 'Optima'
}
})

module.exports = MainTitle
