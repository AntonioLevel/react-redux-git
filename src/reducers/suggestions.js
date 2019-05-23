import { type as FindSuggestionsType } from '../actions/find_suggestions.js';
import data from '../data/items.js';

const default_state = [];

function reducer(state = default_state, { type, payload }) {
    switch(type){
      case FindSuggestionsType: {
        const regex = new RegExp(`^${payload}`, 'i');

        return data.filter(n => regex.test(n.title));
      }
      default:
        return state;
    }
}

export default reducer;
