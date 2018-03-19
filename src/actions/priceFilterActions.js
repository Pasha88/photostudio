import { SET_MORE, SET_LESS } from '../constants/PriceFilter'

export function setMore(price) {

  return {
    type: SET_MORE,
    payload: price
  }

}

export function setLess(price) {

  return {
    type: SET_LESS,
    payload: price
  }

}

