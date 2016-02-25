import _ from 'lodash'

export function increment (state, id) {
  let array = state.counters.slice()
  _.find(array, {key: id}).count >= 0 ? _.find(array,{key:id}).count++ : _.find(array, {key: id}).count = 0
  let new_state = Object.assign({}, state, {counters: array})
  return new_state
}

export function decrement (state, id) {
  let array = state.counters.slice()
  _.find(array, {key: id}).count > 0 ? _.find(array,{key:id}).count-- : _.find(array, {key: id}).count = 0
  let new_state = Object.assign({}, state, {counters: array})
  // _.find(new_state.counters,{key:id}).count--
  return new_state
}

export function insertCounter (state, counterName) {
  let array = state.counters.slice()
  array.push({
    key: counterName,
    title: counterName,
    count: 0
  })
  return Object.assign({}, state, {counters: array})
}
