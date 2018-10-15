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
    this.state = {
        paused: false,
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused : true
    })
  }

  render() {
    return (
      <ViroARScene>
        <ViroSound
          source={require("../objects/sounds/intro_soundtrack.mp3")}
          volume={1.0}
          paused={false}
        />
        <ViroARPlane minHeight={.08} minWidth={.01} pauseUpdates={this.state.paused} onPlaneSelected={this.planeSelected}>
          <ViroAmbientLight color="#ffffff"/>
          <ViroText text='Look Behind You'
            scale={[.2, .2, .2]}
            position={[0, 0.25, -.05]}
            rotation={[5, 0, 0]}
            style={styles.textStyle} />
          <Viro3DObject source={require('../objects/book_obj/objBook.obj')}
            resources={[require('../objects/book_obj/objBook.mtl')]}
            position={[0, 0.3, -.05]}
            scale={[0.03,0.03,0.03]}
            dragType="FixedDistance"
            onDrag={()=>{}}
            rotation={[5, 0, 0]}
            materials={["book"]}
          type="OBJ"/>
        </ViroARPlane>
      </ViroARScene>
    )
  }
}

ViroMaterials.createMaterials({
  book: {
     diffuseTexture: require('../objects/book_obj/libro.jpg'),
     specularTexture: require('../objects/book_obj/libroEspecular.jpg')
   }
})

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ff0000',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = BookScene;
