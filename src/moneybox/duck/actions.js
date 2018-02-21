import Types from './types';

const addCoin = () => ({
  type: Types.ADD_COIN
});

const payArm = () => ({
  type: Types.PAY_ARM
});

const payLeg = () => ({
  type: Types.PAY_LEG
});

const payCucumber = () => ({
  type: Types.PAY_CUCUMBER
});


export default { addCoin, payArm, payLeg, payCucumber };
