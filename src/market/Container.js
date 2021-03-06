import { connect } from 'react-redux';
import { Actions } from '../Bag/duck/';
import { Actions as Actions1 } from '../moneybox/duck'

import Market from './Market';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  addArm: () => {
    dispatch(Actions.addArm());
  },
  addLeg: () => {
    dispatch(Actions.addLeg());
  },
  addCucumber: () => {
    dispatch(Actions.addCucumber());
  },
  payArm: () => {
    dispatch(Actions1.payArm());
  },
  payLeg: () => {
    dispatch(Actions1.payLeg());
  },
  payCucumber: () => {
    dispatch(Actions1.payCucumber());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);


