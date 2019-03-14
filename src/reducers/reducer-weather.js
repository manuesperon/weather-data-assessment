import { RECEIVE_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_WEATHER: 
      console.log(action);
      return {...state, ...action.payload}; 
    default:
      return state;
  }
}