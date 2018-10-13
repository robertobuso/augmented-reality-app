const initialState = {
        experiences: [],
        currentExperience: [],
        audio: ''
       }

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOOSE_AUDIO':
      return {
        ...state,
        audio: action.payload
      }

      case 'LOAD_EXPERIENCES':
      return {
        ...state,
        experiences: action.payload.experiences
      }

      case 'CHOOSE_EXPERIENCE':
      return {
        ...state,
        currentExperience: action.payload.currentExperience
      }

     default:
       return state
   }
}

export default reducer
