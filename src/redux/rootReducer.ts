import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer, // Use the counterReducer here
  // Add other reducers here if needed
});

export default rootReducer;