import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from './types';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: id
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id
});
