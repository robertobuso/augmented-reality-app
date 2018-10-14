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

import { loadExperience } from './js/redux/actions'

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

  componentDidMount() {
    this.props.loadExperience()
  }

  render() {
    console.log(this.props)
    if (!this.props.start || this.props.start === 'false') {
      return this._startExperience();
    } else {
      return this._getARNavigator();
    }
  }

  _startExperience = () => {
    return (
      <HomeScene />
    )
  }

  _getARNavigator = () => {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

  _exitViro = () => {
    this.setState({
      navigatorType : UNSET
    })
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

module.exports =  connect(mapStateToProps, { chooseAudio, loadExperience })(ViroSample)
