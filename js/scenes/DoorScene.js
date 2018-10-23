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
  ViroARCamera,
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
        paused: false,
        opacity: 1,
        wellDone: true,
        churchAnimation: 'rotateChurch',
        pauseUpdates: false
      }
  }

  planeSelected = () => {
    this.setState({
      paused: true,
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

  render() {
    console.log("local state: ", this.state)
    return (
      <ViroARScene>
        <ViroSound
          source={require("../objects/sounds/has_to_be_a_door.m4a")}
          volume={1.0}
          paused={false}
        />
        <ViroSound
          source={require("../objects/sounds/where_is_flower.m4a")}
          volume={1.0}
          paused={this.state.playWarning}
        />
        <ViroSound
          source={require("../objects/sounds/well_done.m4a")}
          volume={1.0}
          paused={this.state.wellDone}
        />

        <ViroARCamera>
          <ViroFlexView
            position={[1, -1.4, -5]}
            height={0.5}
            width={0.5}>
            <ViroImage source={require('../objects/rose_in_chest.png')}
              onClick={this.clickChest}/>
          </ViroFlexView>
        </ViroARCamera>

        <ViroAmbientLight color="#a88be5" intensity={200}/>

        <ViroARPlaneSelector
          minHeight={.2} minWidth={.2} pauseUpdates={this.state.pauseUpdates} onPlaneSelected={this.planeSelected}>

          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}} >
            <ViroPortal
              position={[-0.2, 0.5, -0.5]}
              scale={[.25, .25, .25]}
              opacity={!this.state.opacity}
            >
              <Viro3DObject source={require('../objects/portal_archway/portal_archway.vrx')}
                resources={[require('../objects/portal_archway/portal_archway_diffuse.png'),
                  require('../objects/portal_archway/portal_archway_normal.png'),
                  require('../objects/portal_archway/portal_archway_specular.png')]}
                type="VRX"
                animation={{name:'fadeIn', run:this.props.click_church}}
              />
            </ViroPortal>
            <Viro360Image source={require("../objects/woods.jpg")} />
          </ViroPortalScene>

          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.1, 0, -10]}
            rotation={[0, 33, 0]}
            animation={{name:'floatUp', run:true}}>
            <ViroImage source={require('../objects/paintings/remedios.png')} style={{flex: .2}} />
          </ViroFlexView>
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[0.8, 0, -12]}
            rotation={[0, 33, 0]}
            animation={{name:'floatUp', run:true}}>
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

          {/*The ones on the right*/}
          <ViroFlexView
            style={{flexDirection: 'row', padding: 1}}
            width={10} height={5}
            position={[3, 0, -10]}
            rotation={[0, -45, 0]}
            animation={{name:'floatUp', run:true}}>
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
          <Viro3DObject source={require('../objects/chapel/chapel_obj.obj')}
            resources={[require('../objects/chapel/chapel_obj.mtl')]}
            materials={['church']}
            position={[0, 0, -2]}
            scale={[.0006,.0006,.0006]}
            animation={{name:this.state.churchAnimation, run:this.props.click_chest, interruptible:true}}
            onClick={this.takeChurch}
            dragType="FixedDistance"
            onDrag={()=>{}}
          type="OBJ"/>
        </ViroARPlaneSelector>
      </ViroARScene>
    )
  }
}

  ViroAnimations.registerAnimations({
      rotateChurch:{properties: {rotateY:360}, easing:"Linear", duration: 15000},
      growChurch: {properties:{scaleX:-0.2, scaleY:-0.2, scaleZ:-0.2}, easing:"Linear", duration: 3000},
      fadeOut:{properties:{opacity: 0, scaleX:-0.5, scaleY:-0.5, scaleZ:-0.5}, easing:"Linear", duration: 2000},
      fadeIn:{properties:{opacity: 1}, duration: 5000},
      floatUp:{properties:{positionY:50}, easing:"Linear", duration: 10000}
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
