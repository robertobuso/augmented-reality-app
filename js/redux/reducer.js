const initialState = {
        start: false,
        status: 'new',
        audio: '',
        flower_one: false,
        flower_two: false,
        flower_three: false,
        drag_book: false,
        take_flower_one: false
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
      console.log(action.payload.experience.flower_one)
      return {
        status: action.payload.experience.status,
        start: true,
        flower_one: action.payload.experience.flower_one,
        flower_two: action.payload.experience.flower_two,
        flower_three: action.payload.experience.flower_three,
        drag_book: action.payload.experience.drag_book,
        take_flower_one: action.payload.experience.take_flower_one
      }

      case 'TAKE_FLOWER':
        return {
          ...state,
          [action.payload.flower]: true
        }

     default:
       return state
   }
}

export default reducer
