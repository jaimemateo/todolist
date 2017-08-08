import React from 'react';
import { addTask } from '../../actions';
import { connect } from 'react-redux';
import './TaskInput.css';

let TaskInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTask(input.value))
          input.value = ''
        }}
      >
        <input className='Task__Input'
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

TaskInput = connect()(TaskInput);

export default TaskInput;