import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((restaurant)=>
          <Restaurant 
            key={restaurant.id} 
            restaurant={restaurant} 
            delete={this.props.delete}
          />
        )}
      </ul>
    );
  }
};

export default Restaurants;