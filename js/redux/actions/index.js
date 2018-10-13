import { fetchExperiences } from '../adapters/experiencesAdapter'

export const chooseAudio = (audioSelection) => {
  return {
    type: 'CHOOSE_AUDIO',
    payload: audioSelection
  }
}

export const loadExperiences = () => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3000/api/v1/experiences')
      .then(data => console.log('HI!!!!'))
      .catch(error => console.log(error))
    fetchExperiences()
    .then(experiences => {
      dispatch(setExperiences(experiences))
    })
  }
}

export const setExperiences = (experiences) => {
  return {
    type: 'LOAD_EXPERIENCES',
    payload: {
      experiences
    }
  }
}

export const chooseExperience = (currentExperience) => {
  //This is where we would POST the next current scene and then dispatch it as payload.
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: { currentExperience }
  }
}

// completeTask
// addItem
// dropItem
// saveExperience
