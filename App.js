import React, { Component } from 'react';
import {
  Text,
  View,
  PixelRatio,
  TouchableHighlight,
  Alert
} from 'react-native';

import { connect } from 'react-redux'

import { loadExperience } from './js/redux/actions'

import {
  ViroARSceneNavigator
} from 'react-viro';

import HomeScene from './js/scenes/HomeScene.js'

const sharedProps = {
  apiKey:"1A853839-79AE-41CD-9C29-B554308C3C81",
}

const InitialARScene = require('./js/scenes/BookScene');


export default class ViroSample extends Component {

  state = { sharedProps: sharedProps}

  componentDidMount() {
    this.props.loadExperience()
  }

  render() {
    if (!this.props.start || this.props.start === 'false') {
      return <HomeScene />
    } else {
      return <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}}/>
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { loadExperience })(ViroSample)
