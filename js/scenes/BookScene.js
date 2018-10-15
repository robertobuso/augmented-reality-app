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
  ViroSound,
  ViroNode,
  ViroFlexView,
  ViroImage
} from 'react-viro';

export default class BookScene extends Component {

  constructor() {
    super();
    this.state = {
        paused: false,
        screamPause: true
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true
    })
  }

  takeRose = () => {
      this.setState({
        screamPause: false
      })
  }

  render() {
    return (
      <ViroARScene>
        <ViroFlexView style={{flexDirection: 'row', position: 'absolute'}}
          width={1} height={0.05}
          position={[0, 0.2, -1]}
        >
          {/* <ViroImage source={require('../objects/mirror_top.png')} style={{flex: .5}} />
          </ViroFlexView> */}

        <ViroFlexView style={{flexDirection: 'row', padding: .1, position: 'absolute'}}
          width={1} height={1}
          position={[-2, 0.0, -2]}
          rotation={[0, 45, 0]} >
          <ViroImage source={require('../objects/ghost.jpg')} style={{flex: .5}} />
          <ViroImage source={require('../objects/ghost.jpg')} style={{flex: .5}}/>
        </ViroFlexView>

        <ViroSound
          source={require("../objects/sounds/intro_soundtrack.mp3")}
          volume={1.0}
          paused={false}
        />
        <ViroSound
          paused={this.state.screamPause}
          source={require("../objects/sounds/scream_one.mp3")}
          volume={1.0}
        />
        <ViroNode
          position={[0, 0.3, -.05]}>

          <ViroARPlane minHeight={.08} minWidth={.01} pauseUpdates={this.state.paused} onPlaneSelected={this.planeSelected}>
            <ViroAmbientLight color="#ffffff"/>
            <ViroText text='Look Behind You'
              scale={[.2, .2, .2]}
              position={[0, -0.05, 0]}
              style={styles.textStyle} />
            <Viro3DObject source={require('../objects/book_obj/objBook.obj')}
              resources={[require('../objects/book_obj/objBook.mtl')]}
              placeholderSource={require("../objects/book_obj/libro.jpg")}
              position={[0, 0, 0]}
              scale={[0.03,0.03,0.03]}
              dragType="FixedDistance"
              onDrag={()=>{}}
              materials={["book"]}
            type="OBJ"/>
          </ViroARPlane>
          <ViroARPlane>
            <ViroAmbientLight color="#fffeff"/>
            <Viro3DObject source={require('../objects/rose/rose.obj')}
              resources={[require('../objects/rose/rose.mtl')]}
              position={[15, -0.3, 5]}
              scale={[.04,.04,.04]}
              materials={["rose"]}
              onClick={this.takeRose}
            type="OBJ"/>

          </ViroARPlane>
        </ViroNode>
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

ViroMaterials.createMaterials({
    rose: {
     lightingModel: "Blinn",
     diffuseTexture: require('../objects/rose/rose_texture.jpg'),
     specularTexture: require('../objects/rose/rose_texture.jpg')
   },
});

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
