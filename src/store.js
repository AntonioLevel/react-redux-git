import { createStore, combineReducers } from 'redux';
import results from './reducers/results.js';
import suggestions from './reducers/suggestions.js';
import current_item from './reducers/current_item.js';

const reducer = combineReducers({
  results,
  suggestions,
  current_item
})

const store = createStore(reducer);

export default store;
