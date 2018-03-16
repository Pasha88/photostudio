import { SET_MORE, SET_LESS } from '../constants/PriceFilter'

const initialState = {
  less: 2500,
  more: 1
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_LESS:
      return { ...state, less: action.payload }
    case SET_MORE:
      return { ...state, more: action.payload }
    default:
      return state;
  }

}
