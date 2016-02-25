/* @flow */
/**
Un reducer est une fonction qui prend un state initial  et une action et retourne un state modifié en fonction de cette action
**/

import { increment, decrement, insertCounter } from '../core'

export const counters = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return increment(state, action.payload.id)
    case 'DECREMENT':
      return decrement(state, action.payload.id)
    case 'ADDCOUNTER':
      return insertCounter(state, action.payload.title)
    default:
      return state
  }
}
