import { combineReducers } from 'redux';
import Types from './types';

const addArmReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_ARM:
        return state + 1;
    default:
      return state;
  }
};
const addLegReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_LEG:
      return state + 1;
    default:
      return state;
  }
};
const addCucumberReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_CUCUMBER:
      return state + 1;
    default:
      return state;
  }
};

const bagReducer = combineReducers({
  Arm: addArmReducer,
  Leg: addLegReducer,
  Cucumber: addCucumberReducer
});

export default bagReducer;

export { addArmReducer, addLegReducer, addCucumberReducer };
