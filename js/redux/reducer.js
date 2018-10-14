const initialState = {
        experience: [],
        tasks: [],
        items: [],
        audio: ''
       }

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOOSE_AUDIO':
      return {
        ...state,
        audio: action.payload
      }

      case 'LOAD_EXPERIENCE':
      return {
        ...state,
        experience: action.payload.experience
      }

      case 'CHOOSE_EXPERIENCE':
      return {
        ...state,
        experience.status: action.payload.status
      }

     default:
       return state
   }
}

export default reducer
