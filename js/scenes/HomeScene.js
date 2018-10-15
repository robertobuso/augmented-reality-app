'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Alert
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARPlane,
  Viro3DObject,
  ViroAmbientLight,
  ViroMaterials
} from 'react-viro';

import { connect } from 'react-redux'

import StartContinueButtons from '../redux/components/StartContinueButtons.js'
import AudioButtons from '../redux/components/AudioButtons.js'

export default class HomeScene extends Component {
  render() {
    console.log('STATE!', this.props)
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <Text style={localStyles.titleText}>
            They May Cut All the{' '}
            <Text style={localStyles.flowerText}>
              Flowers
            </Text>
            <Text style={localStyles.titleText}>
              ...
            </Text>
          </Text>
          <AudioButtons />
          <StartContinueButtons />
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    backgroundColor: "black"
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    marginTop: 300
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 35
  },
  flowerText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#FF0000',
    textAlign:'center',
    fontSize : 35
  },
  buttonInner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    marginTop: 50
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

const mapStateToProps = (state) => {
  return state
}

module.exports = connect (mapStateToProps)(HomeScene);
