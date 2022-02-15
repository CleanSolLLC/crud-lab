import React, { Component } from 'react';

class RestaurantInput extends Component {

    state = {
      text: "",
    }

  changeHandler = event => {
    this.setState({
      text: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.text)
    this.setState({
      text: "",
    })
  }
  
  render() {
    return (
      <div>
         <form onSubmit={this.submitHandler}>
            <input 
              type="text"
              placeholder="enter restaurant"
              onChange={this.changeHandler}
              value={this.state.text}
              />
            <input
              type="submit"
              value="Submit"
            />
         </form>
      </div>
    )
  };
};

export default RestaurantInput;

