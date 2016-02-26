/* @flow */
import React, { PropTypes } from 'react'
import Counter from './Counter'
import CounterAdder from './CounterAdder'
import {List} from 'material-ui'

const CounterList = ({counters, incrementCount, decrementCount, addCounter}: {counters: Array<any>, incrementCount: Function, decrementCount: Function, addCounter: Function}): React.Component => {
  return <List>{counters.map((counter) => {
    return (<Counter title={counter.title} count={counter.count} incr={incrementCount} decr={decrementCount} key={counter.title}/>)
  })}
  <CounterAdder submit={addCounter}/>
  </List>
}

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default CounterList
