import { connect } from 'react-redux'
import CounterList from '../components/CounterList'
import { increment, decrement, addCounter } from '../actions'

// a function to map the props of the dumb component below to the state
const mapStateToProps = (state) => {
  return {counters: state.counters}
}

// a function to map the dispatch action to top level props
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (id) => {
      dispatch(increment(id))
    },
    decrementCount: (id) => {
      dispatch(decrement(id))
    },
    addCounter: (title) => {
      dispatch(addCounter(title))
    }
  }
}

// Notice that the connect function will know that it should link the component to the store injected in the app component Provider
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList)

export default CounterListContainer
