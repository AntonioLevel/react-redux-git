export const type = 'FindSuggestions';

const FindSuggestions = text => {
  return {
      type: type,
      payload: text ,
  };
}

export default FindSuggestions;
