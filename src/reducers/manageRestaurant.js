import { combineReducers } from 'redux'
import cuid from 'cuid';
export const cuidFn = cuid;
 
const manageRestaurant = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
}); 

export default manageRestaurant;

function restaurantsReducer(state = [], action) {
    switch (action.type) {

      case "ADD_RESTAURANT":
        let restaurant = {
          id: cuid(),
          text: action.text,
        }
        return [...state, restaurant];

      case "DELETE_RESTAURANT":
        return state.filter(restaurant => restaurant.id !== action.id );

      default:
        return state;
  }
}

function reviewsReducer(state=[], action) {
  switch (action.type) {

    case "ADD_REVIEW":
      let review = {
        id: cuid(),
        text: action.text,
        restaurantId: action.restaurantId
      }
      return [...state, review];

    case "DELETE_RESTAURANT":
      return state.filter(review => review.id !== action.id );

    default:
      return state;
}
}


