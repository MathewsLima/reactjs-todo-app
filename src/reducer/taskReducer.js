import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../actions/types';

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [{ ...action.payload, completed: false }, ...state];
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
