import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>increment</button>
      <button onClick={props.onDecrementClick}>decrement</button>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps')
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps')
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT'}
      dispatch(action)
    },

    onDecrementClick: () => {
      const action = { type: 'DECREMENT'}
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
