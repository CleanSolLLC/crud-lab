import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  addReview = (review) => {
    this.props.addReview(review)
  }

  findReviews = () => {
    console.log(this.props)
    // this.props.reviews.map((review) => {
    // if (review.retaurantId === this.props.restaurantId) {
    //    return <Reviews reviews={review} />
    }
 //})}


  // onDeleteHandler = (id) => {
  //   debugger
  //   this.props.deleteRestaurant(id)
  // }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.addReview} />
        <Reviews reviews={this.findReviews()} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({type: "ADD_REVIEW", text: review.text, restaurantId: review.restaurantId}),  
    deleteReview: (id) => dispatch({type: "DELETE_REVIEW", id: id})
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
