import Types from './types';

const addArm = () => ({
  type: Types.ADD_ARM
});
const addLeg = () => ({
  type: Types.ADD_LEG
});
const addCucumber = () => ({
  type: Types.ADD_CUCUMBER
});

export default { addArm, addLeg, addCucumber };
