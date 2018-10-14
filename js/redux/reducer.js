const initialState = {
        start: false,
        status: '',
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
        status: action.payload.experience[0].status,
        audio: action.payload.experience[0].audio,
        tasks: action.payload.experience[0].tasks,
        items: action.payload.experience[0].items
      }

      case 'CHOOSE_EXPERIENCE':
      return {
        ...state,
        status: action.payload.status,
        start: action.payload.start,
        audio: action.payload.audio,
        tasks: action.payload.tasks,
        items: action.payload.items
      }

     default:
       return state
   }
}

export default reducer
