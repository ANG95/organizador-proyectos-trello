import { combineReducers } from 'redux';
import signInReducer from '../screens/signIn/state/signIn';

const rootReducer = combineReducers({
  signIn: signInReducer,
});

export default rootReducer;
