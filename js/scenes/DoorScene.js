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


export default class DoorScene extends Component {

  constructor() {
    super();
    this.state = {
        paused: false,
        takeRose: false,
        roseOnChest: false
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true
    })
  }

  render() {
    return (
      <ViroARScene>
        <ViroARPlane>
          <ViroAmbientLight color="#ffffff"/>
          <Viro3DObject source={require('../objects/door/OBJ/door.obj')}
            resources={[require('../objects/door/OBJ/door.mtl')]}
            materials={["door"]}
            position={[0, -0.5, -2]}
            scale={[.5,.5,.5]}
            dragType="FixedDistance"
            onDrag={()=>{}}
          type="OBJ"/>
        </ViroARPlane>
      </ViroARScene>
    )
  }
}

ViroAnimations.registerAnimations({
    animateImage:{properties:{positionX:-3, positionY:-8.5,
                              opacity: 0},
                  easing:"EaseIn",
                  duration: 3000},
})

ViroAnimations.registerAnimations({
    fadeIn:{properties:{opacity: 1},
                  easing:"Linear",
                  duration: 6000},
})

ViroMaterials.createMaterials({
  door: {
     diffuseTexture: require('../objects/door/tex.jpg')
   },
})

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { takeFlower, completeTask } )(DoorScene)
