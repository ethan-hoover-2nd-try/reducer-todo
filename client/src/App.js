import React, { useReducer } from 'react';
import {initialState, reducer} from './reducers/todoReducer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import moment from 'moment';

import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = taskName => {
    dispatch({type: 'ADD_TASK', payload: taskName});
  };

  const removeCompleted = () => {
    dispatch({type: 'REMOVE_COMPLETED'});
  };

  const toggleCompleted = id => {
    dispatch({type: 'TOGGLE_TASK', payload: {id:id, date: moment().format('LLLL')} });
  };

  console.log({...state});
  return (
    <div className='App'>
      <h1>Todo with Reducers</h1>
      <TaskList {...state} toggleCompleted={toggleCompleted}/>
      <TaskForm addTask={addTask} removeCompleted={removeCompleted}/>
    </div>
  );
}

export default App;
