import React from 'react';

const Todo = ({ text, completed, onToggle, onRemoveTask }) => {
  return (
    <li onClick={onToggle} className="d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }} className="text-justify">
        {text}
      </span>
      <div onClick={onRemoveTask}>
        <i className="pl-4 text-danger font-bold">×</i>
      </div>
    </li>
  );
};

export default Todo;
