import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  onSubmitHandler = (restaurant) => {
    this.props.addRestaurant(restaurant)
  }

  onDeleteHandler = (id) => {
    this.props.deleteRestaurant(id)
  }


  render() {
    return (
      <div>
        <RestaurantInput onSubmitHandler={this.onSubmitHandler} />
        <Restaurants restaurants={this.props.restaurants} delete={this.onDeleteHandler}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (text) => dispatch({type: "ADD_RESTAURANT", text: text}),  
    deleteRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", id: id})
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
