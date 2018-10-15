import { connect } from 'react-redux'

import React, { Component } from 'react';

import { startNewExperience, startSavedExperience } from '../actions'

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

class StartContinueButtons extends Component {

  _handleStartButton = (response) => {
    if (this.props.audio === '') {
      Alert.alert(
        'Please Choose Audio',
        'Press one of the choices.',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ],
  { cancelable: false }
)
} else if (response === 'start') {
  this.props.startNewExperience('new')
} else if (response === 'continue')
  this.props.startSavedExperience('saved')
  }

  render() {
    return(
      <View style={localStyles.buttonInner}>
        <View style={localStyles.container}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={(event) => this._handleStartButton('start')}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>start</Text>
          </TouchableHighlight>
        </View>

        {this.props.experience ?
          this.props.experience.status === 'saved' ?
            <View style={localStyles.buttonInner}>
              <TouchableHighlight style={localStyles.buttons}
                onPress={(event) => this._handleStartButton('continue')}
                underlayColor={'#68a0ff'} >
                <Text style={localStyles.buttonText}>continue</Text>
              </TouchableHighlight>
            </View>
          : null
        : null
        }
      </View>
  )
  }
}

const localStyles = StyleSheet.create({
  buttonInner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    marginTop: 20
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

module.exports =  connect(mapStateToProps, { startNewExperience, startSavedExperience } )(StartContinueButtons)
