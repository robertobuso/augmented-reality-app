'use strict';

import React, { Component } from 'react';

import {StyleSheet, View} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARPlane,
  ViroARPlaneSelector,
  Viro3DObject,
  ViroAmbientLight,
  ViroMaterials,
  ViroSound,
  ViroNode,
  ViroFlexView,
  ViroImage,
  ViroAnimations,
  ViroPortal,
  ViroPortalScene,
  Viro360Image
} from 'react-viro';

import { connect } from 'react-redux'

import { completeTask } from '../redux/actions'

export default class DoorScene extends Component {

  constructor() {
    super();
    this.state = {
        opacity: 1,
        wellDone: true,
        churchAnimation: 'rotateChurch',
        pauseUpdates: false,
        touchPainting: true
    }
  }

  planeSelected = () => {
    this.setState({
      takeChurch: false,
      playWarning: true,
      pauseUpdates: true
    })
  }

  takeChurch = () => {
    if (this.props.click_chest != true) {
      this.setState( {playWarning: false} )
    } else {
      this.setState({
          opacity: 0,
          churchAnimation: 'fadeOut'
      }, () => this.props.completeTask('click_church'))
    }
  }

  clickChest = () => {
    this.setState({wellDone: false})
    this.props.completeTask('click_chest')
  }

  touchPainting = () => {
    this.setState({ touchPainting: false })
  }

  render() {
    return (
      <ViroARScene>
        <ViroSound
          source={require("../objects/sounds/final_scene_soundtrack.mp3")}
          volume={1.0}
          paused={false}
        />
        <ViroSound
          source={require("../objects/sounds/click_chest_wrong.m4a")}
          volume={1.0}
          paused={this.state.playWarning}
        />
        <ViroSound
          source={require("../objects/sounds/well_done.m4a")}
          volume={1.0}
          paused={this.state.wellDone}
        />
        <ViroSound
          paused={!this.props.click_church}
          source={require("../objects/sounds/ending.mp3")}
          volume={1.0}
        />
        <ViroSound
          source={require("../objects/sounds/is_a_painting.m4a")}
          volume={1.0}
          paused={this.state.touchPainting}
        />

        <ViroAmbientLight color="#a88be5" intensity={200}/>
        <ViroARPlaneSelector
          minHeight={.2} minWidth={.2} pauseUpdates={this.state.pauseUpdates} onPlaneSelected={this.planeSelected}>

          <ViroPortalScene passable={true}  >
            <ViroPortal
              position={[-0.2, 0.5, -0.5]}
              scale={[.25, .25, .25]}
              opacity={!this.state.opacity}>
              <Viro3DObject source={require('../objects/portal_archway/portal_archway.vrx')}
                resources={[require('../objects/portal_archway/portal_archway_diffuse.png'),
                  require('../objects/portal_archway/portal_archway_normal.png'),
                  require('../objects/portal_archway/portal_archway_specular.png')]}
                type="VRX"
                animation={{name:'fadeIn', run:this.props.click_church}}
                dragType="FixedToWorld"
                onDrag={()=>{}}
              />
            </ViroPortal>
            <Viro360Image source={require("../objects/woods.jpg")} />
          </ViroPortalScene>

          {/*Paintings on the left.*/}
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.1, 0, -10]}
            rotation={[0, 33, 0]}
            animation={{name:'floatUp', run:true}}
            onClick={this.touchPainting}
          >
            <ViroImage source={require('../objects/paintings/remedios.png')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.8, 0, -12]}
            rotation={[0, 33, 0]}
            animation={{name:'floatUp', run:true}}
          >
            <ViroImage source={require('../objects/paintings/baez.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[1.5, 0, -14]}
            rotation={[0, 33, 0]}
            animation={{name:'floatUp', run:true}}>
            <ViroImage source={require('../objects/paintings/orozco.jpg')} style={{flex: .2}} />
          </ViroFlexView>

          {/*Paintings on the right*/}
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[3, 0, -10]}
            rotation={[0, -45, 0]}
            animation={{name:'floatUp', run:true}}
            onClick={this.touchPainting}>
            <ViroImage source={require('../objects/paintings/roche.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[4, 0, -12]}
            rotation={[0, -45, 0]}
            animation={{name:'floatUp', run:true}}>
            <ViroImage source={require('../objects/paintings/oller.jpg')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[5, 0, -14]}
            rotation={[0, -45, 0]}
            animation={{name:'floatUp', run:true}}>
            <ViroImage source={require('../objects/paintings/rodon.jpg')} style={{flex: .2}} />
          </ViroFlexView>

          <ViroAmbientLight color="#ffffff"/>
          <Viro3DObject     source={require('../objects/chapel/chapel_obj.obj')}
            resources={[require('../objects/chapel/chapel_obj.mtl')]}
            materials={['church']}
            position={[0, 0, -2]}
            scale={[.0006,.0006,.0006]}
            animation={{name:this.state.churchAnimation, run:this.props.click_chest, interruptible:true}}
            onClick={this.takeChurch}
            dragType="FixedToWorld"
            onDrag={()=>{}}
          type="OBJ"/>

          <Viro3DObject source={require('../objects/rose_obj/PrimroseP.obj')}
            resources={[
              require('../objects/rose_obj/PrimroseP.mtl'),
              require('../objects/rose_obj/PRIM1ST.png'),
              require('../objects/rose_obj/PRIM1P.png'),
              require('../objects/rose_obj/PRIM1L2.png'),
              require('../objects/rose_obj/PRIM1L3.png'),
              require('../objects/rose_obj/PRIMsoil.png'),
              require('../objects/rose_obj/vase.png')]}
            position={[0, 0, -0.05]}
            scale={[0.5,0.5,0.5]}
            onClick={this.clickChest}
          type="OBJ"/>

        </ViroARPlaneSelector>
      </ViroARScene>
    )
  }
}

  ViroAnimations.registerAnimations({
      rotateChurch: {properties: {rotateY:360}, easing:"Linear", duration: 15000},
      growChurch: {properties:{scaleX:-0.2, scaleY:-0.2, scaleZ:-0.2}, easing:"Linear", duration: 3000},
      fadeOut: {properties:{opacity: 0, scaleX:-0.5, scaleY:-0.5, scaleZ:-0.5}, easing:"Linear", duration: 2000},
      fadeIn: {properties:{opacity: 1}, duration: 5000},
      floatUp: {properties:{positionY:10}, easing:"Bounce", duration: 10000}
  })

ViroMaterials.createMaterials({
  door: {
     diffuseTexture: require('../objects/door/tex.jpg')
   },
   church: {
      diffuseTexture: require('../objects/chapel/chapel_diffuse.jpg'),
      specularTexture: require('../objects/chapel/chapel_spec.jpg'),
      normalTexture: require('../objects/chapel/chapel_normal.jpg')
    }
})

const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { completeTask } )(DoorScene)
