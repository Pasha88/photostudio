import { SET_MORE, SET_LESS } from '../constants/PriceFilter'

export function setMore(year) {

  return {
    type: SET_MORE,
    payload: year
  }

}

export function setLess(year) {

  return {
    type: SET_LESS,
    payload: year
  }

}

