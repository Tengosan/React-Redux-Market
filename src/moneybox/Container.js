import { connect } from 'react-redux';
import Moneybox from './Moneybox';
import { Actions } from './duck';

const mapStateToProps = state => ({ coinCount: state.coinReducer });

const mapDispatchToProps = dispatch => ({
  addCoin: () => {
    dispatch(Actions.addCoin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Moneybox);
