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
        paused: false,
        screamPause: true,
        takeRose: false,
        roseOnChest: false,
        opacity: 1
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true,
      takeChurch: false
    })
  }

  takeChurch = () => {
    if (this.state.opacity === 1) {
      this.setState({
        opacity: 0})
      } else {
        this.setState({
          takeChurch: true})
      }
  }

  render() {
    return (
      <ViroARScene>
        <ViroSound
          source={require("../objects/sounds/has_to_be_a_door.m4a")}
          volume={1.0}
          paused={false}
        />
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
        <ViroARPlane
          minHeight={0.2}
          minWidth={0.2}
          alignment={'Horizontal'}
          pauseUpdates={this.state.paused}
          onPlaneSelected={this.planeSelected}>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.1, 0, -10]}
            rotation={[0, 33, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.5, 0, -12]}
            rotation={[0, 33, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.9, 0, -14]}
            rotation={[0, 33, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>

          {/*The ones on the right*/}
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[3, 0, -10]}
            rotation={[0, -45, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[4, 0, -12]}
            rotation={[0, -45, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[5, 0, -14]}
            rotation={[0, -45, 0]} >
            <ViroImage source={require('../objects/eyes.jpg')} style={{flex: .2}} />
          </ViroFlexView>
        </ViroARPlane>
        <ViroARPlane
          minHeight={0.2}
          minWidth={0.2}
          alignment={'Horizontal'}
          pauseUpdates={this.state.paused}
          onPlaneSelected={this.planeSelected}>
          <ViroAmbientLight color="#ffffff"/>
          <Viro3DObject source={require('../objects/chapel/chapel_obj.obj')}
            resources={[require('../objects/chapel/chapel_obj.mtl')]}
            materials={['church']}
            position={[1, 0.5, -0.5]}
            scale={[.001,.001,.001]}
            // onClick={this.takeChurch}
            dragType="FixedDistance"
            onDrag={()=>{}}
          type="OBJ"/>
        </ViroARPlane>
      </ViroARScene>
    )
  }
}

  ViroAnimations.registerAnimations({
      animateImage:{properties:{positionX:-3, positionY:-8.5,opacity: 0}, easing:"EaseIn", duration: 2000},
      rotateChurch:{properties: {rotateY:360, rotateZ: 360}, easing:"EaseIn", duration: 3000},
      growChurch: {properties:{scaleX:0.2, scaleY:0.2, scaleZ:0.2, opacity: 1.0}, easing:"Linear", duration: 3000},
      minimizeChurch: {properties:{scaleX:-0.5, scaleY:-0.5, scaleZ:-0.3, opacity: 1.0}, easing:"Linear", duration: 3000},
      growAndMinimizeChurch: [["growChurch", "minimizeChurch"]]
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

ViroMaterials.createMaterials({
  church: {
     diffuseTexture: require('../objects/chapel/chapel_diffuse.jpg'),
     specularTexture: require('../objects/chapel/chapel_spec.jpg'),
     normalTexture: require('../objects/chapel/chapel_normal.jpg')
   }
})

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { takeFlower, completeTask, loadExperience } )(DoorScene)
