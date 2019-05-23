export const type = 'FindResults';

const FindResults = text => {
  return {
      type: type,
      payload: text ,
  };
}

export default FindResults;
