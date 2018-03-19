import { SET_SEARCH_WORD } from '../constants/searchBar'

/*По умолчанию null - важно для проверки в App.js*/
const initialState = {
  word: null
}

export default function searchBar(state = initialState, action) {

  switch (action.type) {
    case SET_SEARCH_WORD:
      return { ...state, word: action.payload }
    default:
      return state;
  }

}
