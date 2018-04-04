// Code ControlledInput Component Here

//for input and textare we use value
// for checkbox and radio we use checked
// for option we use selected

import React from 'react';

class ControlledInput extends React.Component{
  constructor(){
    super();

    this.state = {
      value: '',
    }
    //by setting the initial value property, we can define it to whatever we want
  }

  handleChange = event => {
    debugger

    this.setState({
      value: event.target.value
    })
    //sets value to new value from form
  }

  render(){
    return(
      <div>
      <input
        type='text'
        value={this.state.value}
        onChange={this.handleChange}
      />
      <h1>{this.state.value}</h1>
      </div>
    )

  }
}

export default ControlledInput;
