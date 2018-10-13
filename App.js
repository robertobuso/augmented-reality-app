/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

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

import { connect } from 'react-redux'

import { chooseAudio } from './js/redux/actions'

import {
  ViroARSceneNavigator
} from 'react-viro';

import HomeScene from './js/scenes/HomeScene.js'

const sharedProps = {
  apiKey:"1A853839-79AE-41CD-9C29-B554308C3C81",
}

const InitialARScene = require('./js/scenes/BookScene');

const UNSET = "UNSET";
const AR_NAVIGATOR_TYPE = "AR";
const defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
  }

  render() {
    if (!this.props.currentExperience || this.props.currentExperience.length === 0) {
      return this._startExperience();
    } else {
      return this._getARNavigator();
    }
  }

  _startExperience = () => {
    return (
      <HomeScene
        handleStartButton={this._handleStartButton}
        setAudio={this._setAudio}/>
    )
  }

  _getARNavigator = () => {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }


   _setAudio = (audioSelection) => {
    this.props.chooseAudio(audioSelection)
  }

  _exitViro = () => {
    this.setState({
      navigatorType : UNSET
    })
  }
}

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { chooseAudio } )(ViroSample)
