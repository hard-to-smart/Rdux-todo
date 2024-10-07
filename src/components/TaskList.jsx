import React from 'react'
import SingleTask from './SingleTask'
import { useSelector } from 'react-redux';
import { selectorTodo } from '../TodoSlice';

const TaskList = () => {
  const todos = useSelector(selectorTodo);
  console.log(todos);
  return (
    <ul>
      { todos?.map((todo)=>{
        return <SingleTask key={todo.id} {...todo}/>
      })
      }
    </ul>
  )
}

export default TaskList