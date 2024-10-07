import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask, editTask, selectorIsEditing } from "../TodoSlice";

const SingleTask = ({ id, task, isCompleted, is }) => {
  console.log(id, task, isCompleted);
  const isEditing = useSelector(selectorIsEditing)
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(completeTask(id))}
      />
      <label style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task}</label>
      {!isCompleted && <i className="fa fa-edit " onClick={()=> dispatch(editTask(id))}/>}
      {!isEditing && <i className="fa fa-trash "
        onClick={() => dispatch(deleteTask(id))}
      />}
    </li>
  );
};

export default SingleTask;
