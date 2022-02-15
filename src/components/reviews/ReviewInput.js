import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
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
  this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
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
            placeholder="enter review"
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

export default ReviewInput;
