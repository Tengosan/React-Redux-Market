import Types from './types';


const coinReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_COIN:
      if (state < 100) {
        return state + 1;
      }
      return state;

    case Types.PAY_ARM:
      if (state > 1 && state < 100) {
        return state - 2;
      }
      return state;

    case Types.PAY_LEG:
      if (state > 2 && state < 100) {
        return state - 3;
      }
      return state;

    case Types.PAY_CUCUMBER:
      if (state > 4 && state < 100) {
        return state - 5;
      }
      return state;

    default:
      return state;
  }
};

export default coinReducer;
