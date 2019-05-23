import { type as FindResultsType } from '../actions/find_results.js';
import data from '../data/items.js';

const default_state = [];

function reducer(state = default_state, { type, payload }) {
  switch(type){
    case FindResultsType: {
      const regex = new RegExp(`^${payload}`, 'i');

      return data.filter(n => regex.test(n.title));
    }
    default:
      return state;
  }
}

export default reducer;
