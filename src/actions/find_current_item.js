export const type = 'FindCurrentItem';

const FindCurrentItem = (itemId) => {
  return {
      type: type,
      payload: +itemId,
  };
}

export default FindCurrentItem;
