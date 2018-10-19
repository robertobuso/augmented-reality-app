'use strict';

import React, { Component } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

import StartContinueButtons from '../redux/components/StartContinueButtons.js'
import AudioButtons from '../redux/components/AudioButtons.js'
import MainTitle from '../redux/components/MainTitle.js'

export default class HomeScene extends Component {
  render() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <MainTitle />
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
  }
})

const mapStateToProps = (state) => {
  return state
}

module.exports = connect (mapStateToProps)(HomeScene);
