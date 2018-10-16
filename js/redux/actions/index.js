import { fetchExperience, fetchNewExperience, fetchUpdatedAudio, fetchUpdatedFlower, fetchUpdatedTask } from '../adapters/experiencesAdapter'

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

export const startSavedExperience = (experience) => {
  return {
    type: 'CHOOSE_EXPERIENCE',
    payload: {
    experience: experience
    }
  }
}

export const takeFlower = (flower) => {
    return (dispatch) => {
    fetchUpdatedFlower(flower)
    .then( flower => {
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
    return (dispatch) => {
    fetchUpdatedTask(task)
    .then( task => {
      dispatch(setUpdatedTask(task))
    })
  }
}

export const setUpdatedTask = (task) => {
  return {
    type: 'COMPLETE_TASK',
    payload: {
      task: task
     }
  }
}


// completeTask
// addItem
// dropItem
// saveExperience
