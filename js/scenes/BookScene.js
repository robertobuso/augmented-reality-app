'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARPlane,
  Viro3DObject,
  ViroAmbientLight,
  ViroMaterials,
  ViroSound
} from 'react-viro';

export default class BookScene extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
        <ViroSound
          source={require("../objects/sounds/glass.mp3")}
          volume={1.0}
          paused={false}
        />
        <ViroSound
          source={require("../objects/sounds/footsteps.mp3")}
          volume={1.0}
          paused={false}/>
        <ViroSound
          source={require("../objects/sounds/door_closed.mp3")}
          volume={1.0}
          paused={false}/>
        <ViroSound
          source={require("../objects/sounds/song.mp3")}
          volume={1.0}
          paused={false}/>
        <ViroARPlane>
          <ViroAmbientLight color="#ffffff"/>
          <Viro3DObject source={require('../objects/book_obj/objBook.obj')}
            resources={[require('../objects/book_obj/objBook.mtl')]}
            position={[0, -0.5, -1]}
            scale={[0.03,0.03,0.03]}
            materials={["book"]}
            dragType="FixedDistance"
            onDrag={()=>{}}
          type="OBJ"/>
        </ViroARPlane>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  book: {
     diffuseTexture: require('../objects/book_obj/libro.jpg'),
     specularTexture: require('../objects/book_obj/libroEspecular.jpg')
   },
});

module.exports = BookScene;
