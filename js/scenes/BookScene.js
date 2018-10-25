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
  ViroAnimations,
  ViroButton
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
        roseOnChest: false,
        bookLoaded: false,
        bookAudio: true,
        soundtrack: false,
        renderTheRest: false,
        tada: true
      }
  }

  planeSelected = (anchor) => {
    this.setState({
      paused: true
    })
  }

  takeRose = () => {
    // setTimeout(this.setState({
    //   screamPause: false,
    //   takeRose: true}), 2500)
      this.setState({
        screamPause: false,
        takeRose: true})
  }

  roseOnChest = () => {
    this.props.takeFlower('flower_one')
    this.setState({
      roseOnChest: true
    })
  }

  nextScene = () => {
    // this.setState({ tada: false })
    this.props.completeTask('take_flower_one')
  }

  bookIsLoaded = () => {
    this.setState ({ bookLoaded: true})
    setTimeout(this.bookAudio, 13000)
  }

  bookAudio = () => {
    this.setState({ bookAudio: false })
  }

  dragBook = () => {
    this.props.completeTask('drag_book')
  }

  render() {
    console.log('BookScene state: ', this.state)
        console.log('BookScene props: ', this.props)
    return (
          <ViroARScene>
            <ViroSound
              source={require("../objects/sounds/intro_soundtrack.mp3")}
              volume={1.0}
              paused={false}
            />

            <ViroSound
              source={require("../objects/sounds/tada.mp3")}
              volume={0.6}
              paused={this.state.tada}
            />

            {this.state.takeRose === false ?
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
              paused={this.state.screamPause}
              source={require("../objects/sounds/twinkle.mp3")}
              volume={1.0}
            />

            <ViroNode
              position={[0, 0.3, -.05]}>
              <ViroARPlane
                minHeight={0.2}
                minWidth={0.2}
                alignment={'Horizontal'}
                pauseUpdates={this.state.paused}
                onPlaneSelected={this.planeSelected}>
                <ViroAmbientLight color="#ffffff"/>
                <Viro3DObject
                  onLoadEnd={this.bookIsLoaded}
                  source={require('../objects/book_obj/objBook.obj')}
                  resources={[require('../objects/book_obj/objBook.mtl')]}
                  placeholderSource={require("../objects/book_obj/libro.jpg")}
                  position={[0, 0, -1]}
                  scale={[0.03,0.03,0.03]}
                  dragType="FixedDistance"
                  onDrag={()=>{}}
                  onClick={this.dragBook}
                  materials={["book"]}
                type="OBJ"/>
                <ViroAmbientLight color="#ffffff"/>
                {this.state.bookLoaded === true ?
                  <ViroText text='Look Behind You'
                    scale={[.2, .2, .2]}
                    position={[0, -0.04, -1.1]}
                    rotation={[10,10,0]}
                    style={styles.textStyle} />
                : null }
              </ViroARPlane>

              <ViroAmbientLight color="#fffeff"/>
              <Viro3DObject source={require('../objects/rose/rose.obj')}
                resources={[require('../objects/rose/rose.mtl')]}
                position={[25, -3, 5]}
                scale={[.07,.07,.07]}
                materials={["rose"]}
                onClick={this.takeRose}
                animation={{name:'animateImage', run:this.state.takeRose, onFinish:this.roseOnChest}}
              type="OBJ"/>
              {this.state.roseOnChest === true ?
                <ViroButton
                  source={require("../objects/continue.png")}
                  position={[3,-0.3,-4]}
                  height={1}
                  width={1.5}
                  rotation={[33,0,0]}
                  onClick={this.nextScene}
                /> : null }
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
    animateImage:{properties:{positionX:-3, positionY:-8.5,opacity: 0}, easing:"EaseIn", duration: 2000}
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
