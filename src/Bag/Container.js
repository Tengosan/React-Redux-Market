import { connect } from 'react-redux';
import Bag from './Bag';

const mapStateToProps = state => ({
  armsCount: state.bagReducer.Arm,
  legsCount: state.bagReducer.Leg,
  cucumbersCount: state.bagReducer.Cucumber,
});

export default connect(mapStateToProps)(Bag);
