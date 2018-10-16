'use strict';

import React, { Component } from 'react';

import {StyleSheet, View} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARPlane,
  Viro3DObject,
  ViroAmbientLight,
  ViroMaterials,
  ViroSound,
  ViroNode,
  ViroFlexView,
  ViroImage,
  ViroARCamera,
  ViroAnimatedImage,
  ViroAnimations
} from 'react-viro';

import { connect } from 'react-redux'

import { takeFlower, completeTask } from '../redux/actions'


export default class BookScene extends Component {

  constructor() {
    super();
    this.state = {
        paused: false,
        screamPause: true,
        takeRose: false,
        roseOnChest: false
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true
    })
  }

  takeRose = () => {
      this.setState({
        screamPause: false,
        takeRose: true
      }, () => this.props.takeFlower('flower_one'))
  }

  roseOnChest = () => {
    this.setState({
      roseOnChest: true
    }, () => this.props.completeTask('take_flower_one'))
  }

  render() {
    console.log('Redux State:', this.props)
    return (
        <ViroARScene>
          {this.state.roseOnChest === false ?
            <ViroARCamera>
              <ViroFlexView
                position={[1, -1.4, -5]}
                height={0.5}
                width={0.5}>
                <ViroImage source={require('../objects/chest.png')} />
              </ViroFlexView>
            </ViroARCamera>
          :
          <ViroARCamera>
            <ViroFlexView
              position={[1, -1.4, -5]}
              height={0.5}
              width={0.5}>
              <ViroImage source={require('../objects/rose_in_chest.png')} />
            </ViroFlexView>
          </ViroARCamera>
          }
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
            <ViroARPlane
              minHeight={0.5}
              minWidth={0.5}
              alignment={'Horizontal'}
              pauseUpdates={this.state.paused}
              onPlaneSelected={this.planeSelected}>
              <ViroAmbientLight color="#ffffff"/>
              <ViroText text='Look Behind You'
                scale={[.2, .2, .2]}
                position={[0, -0.05, 0]}
                rotation={[10,10,0]}
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

            <ViroAmbientLight color="#fffeff"/>
            <Viro3DObject source={require('../objects/rose/rose.obj')}
              resources={[require('../objects/rose/rose.mtl')]}
              position={[15, -1.8, 7]}
              scale={[.04,.04,.04]}
              materials={["rose"]}
              onClick={this.takeRose}
              dragType="FixedDistance"
              onDrag={()=>{}}
              animation={{name:'animateImage', run:this.state.takeRose, onFinish:this.roseOnChest}}
            type="OBJ"/>
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
})

ViroAnimations.registerAnimations({
    animateImage:{properties:{positionX:-3, positionY:-8.5,
                              opacity: 0},
                  easing:"EaseIn",
                  duration: 3000},
})

ViroAnimations.registerAnimations({
    fadeIn:{properties:{opacity: 1},
                  easing:"Linear",
                  duration: 10000},
})

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ff0000',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
})

ViroMaterials.createMaterials({
    frontMaterial: {
      diffuseColor: '#FFFFFF',
    },
    backMaterial: {
      diffuseColor: '#FF0000',
    },
    sideMaterial: {
      diffuseColor: '#ff0000',
    },
})

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { takeFlower, completeTask } )(BookScene)
