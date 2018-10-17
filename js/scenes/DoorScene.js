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
  ViroAnimations
} from 'react-viro';

import { connect } from 'react-redux'

import { takeFlower, completeTask, loadExperience } from '../redux/actions'

export default class DoorScene extends Component {

  constructor() {
    super();
    this.state = {
        paused: false
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true
    })
  }

  render() {
    console.log('second scene props: ', this.props)
    return (
      <ViroARScene>
        {this.props.flower_one === false ?
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

module.exports =  connect(mapStateToProps, { takeFlower, completeTask, loadExperience } )(DoorScene)
