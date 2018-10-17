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
        start: false,
        status: action.payload.experience[0].status,
        audio: action.payload.experience[0].audio,
        flower_one: action.payload.experience[0].flower_one,
        flower_two: action.payload.experience[0].flower_two,
        flower_three: action.payload.experience[0].flower_three,
        drag_book: action.payload.experience[0].drag_book,
        take_flower_one: action.payload.experience[0].take_flower_one
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
      console.log('inside take flower: ', action.payload.flower)
        return {
          ...state,
          [action.payload.flower]: true,
          status: 'saved'
        }

        case 'COMPLETE_TASK':
        console.log('inside complete task: ', action.payload.task)
          return {
            ...state,
            [action.payload.task]: true,
            status: 'saved'
          }

     default:
       return state
   }
}

export default reducer
