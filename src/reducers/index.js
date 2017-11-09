import { combineReducers } from 'redux';
import FetchListReducer from './reducer_shoppinglist';

const rootReducer = combineReducers({
  weather: FetchListReducer
});

export default rootReducer;
