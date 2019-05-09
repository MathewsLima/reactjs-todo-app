import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import Header from './Header';
import Footer from './Footer';
import AddTaskInput from './Tasks/AddTaskInput';
import TaskList from './Tasks/TaskList';

const App = () => {
  return (
    <div className="container mx-auto h-100">
      <div className="d-flex flex-column align-items-center h-100">
        <Header />
        <Provider store={store}>
          <AddTaskInput />
          <div className="my-3 flex-grow-1 col-sm-12 col-md-4 overflow-auto rounded">
            <TaskList />
          </div>
        </Provider>
        <Footer />
      </div>
    </div>
  );
};

export default App;
