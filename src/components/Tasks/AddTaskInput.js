import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../actions';

class InputAddTodo extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  state = { text: '', id: null };

  componentDidMount() {
    this.form.current.children[0].focus();
    this.setState({ id: this.generateRandomId() });
  }

  generateRandomId = () => {
    return Math.random()
      .toString(16)
      .slice(0, 7);
  };

  onInputChange = event => {
    this.setState({ text: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (!this.state.text.trim()) {
      return;
    }

    this.props.addTask(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ text: '', id: this.generateRandomId() });
    this.form.current.reset();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} id="form" ref={this.form}>
        <input
          type="text"
          placeholder="Write some tasks"
          className="form-control text-center"
          onChange={this.onInputChange}
          value={this.state.task}
        />
      </form>
    );
  }
}

export default connect(
  null,
  { addTask }
)(InputAddTodo);
