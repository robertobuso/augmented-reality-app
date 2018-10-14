import { fetchExperience, fetchNewExperience } from '../adapters/experiencesAdapter'

export const chooseAudio = (audioSelection) => {
  return {
    type: 'CHOOSE_AUDIO',
    payload: audioSelection
  }
}

export const loadExperience = () => {
    return (dispatch) => {fetchExperience()
    .then(experience => {
      dispatch(setExperience(experience))
    })
  }
}

export const setExperience = (experience) => {
  return {
    type: 'LOAD_EXPERIENCE',
    payload: {
      experience
    }
  }
}

export const startNewExperience = (status) => {
  return (dispatch) => {
  fetchNewExperience()
  .then( experience => {
    dispatch(setNewExperience(experience))
    })
  }
}

export const startSavedExperience = (status) => {
  //This is where we would PATCH the status of the experience and then dispatch it as payload.
}

export const setNewExperience = (experience) => {
  console.log("answer from patch", experience)
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: {
      experience
     }
  }
}

export const setSavedExperience = (status) => {
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: {
    status: status
   }
 }
}

// completeTask
// addItem
// dropItem
// saveExperience
