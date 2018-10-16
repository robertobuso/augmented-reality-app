import { fetchExperience, fetchNewExperience, fetchUpdatedAudio, fetchUpdatedFlower } from '../adapters/experiencesAdapter'

export const chooseAudio = (audioSelection) => {
  return (dispatch) => {
  fetchUpdatedAudio(audioSelection)
  .then( audioSelection => {
    dispatch(setUpdatedAudio(audioSelection))
    })
  }
}

export const setUpdatedAudio = (audioSelection) => {
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

export const setNewExperience = (experience) => {
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: {
      experience
     }
  }
}

export const startSavedExperience = (status) => {
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: {
    status: status
    }
  }
}

export const takeFlower = (flower) => {
    return (dispatch) => {
    fetchUpdatedFlower()
    .then( experience => {
      dispatch(setUpdatedFlower(flower))
    })
  }
}

export const setUpdatedFlower = (flower) => {
  return {
    type: 'TAKE_FLOWER',
    payload: {
      flower: flower
     }
  }
}

export const completeTask = (task) => {
  return(dispatch) => {console.log("Completed Task!", task)}
}


// completeTask
// addItem
// dropItem
// saveExperience
