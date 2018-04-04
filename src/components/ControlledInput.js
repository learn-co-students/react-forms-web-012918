// Code ControlledInput Component Here

import React from 'react';


class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange} />
    );
  }
}

  export default ControlledInput;
