import React from 'react';
import { connect } from 'react-redux';

import { toggleTask } from '../../actions';
import { removeTask } from '../../actions';

import Task from './Task';
import './Task.css';

const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <ul className="list position-relative shadow">
      <div className="lines" />
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onToggle={() => toggleTask(task.id)}
          onRemoveTask={() => removeTask(task.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({ tasks: state.todoList });

export default connect(
  mapStateToProps,
  { toggleTask, removeTask }
)(TaskList);
