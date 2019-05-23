import { type as FindCurrentItem } from '../actions/find_current_item.js';
import data from '../data/items.js';

const default_state = {};

function reducer(state = default_state, { type, payload }) {
    switch(type){
      case FindCurrentItem: {
         return data.find(n => n.id === payload);
      }
      default:
        return state;
    }
}

export default reducer;
