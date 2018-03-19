import { SET_SEARCH_WORD } from '../constants/searchBar'

export function setSearchWord(word) {

  return {
    type: SET_SEARCH_WORD,
    payload: word
  }

}

