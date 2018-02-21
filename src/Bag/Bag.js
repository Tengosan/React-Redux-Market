import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Bag.css';

class Bag extends Component {
  constructor(props) {
    super(props);
    this.declensionOfNum = this.declensionOfNum.bind(this);
  }

  declensionOfNum(number, titles) {
    this.cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : this.cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  render() {
    return (
      <div className="Bag">
        <div className="ingredient-table">
          <div className="arm-count mar">
            {this.props.armsCount}{' '}
            {this.declensionOfNum(this.props.armsCount, [
              'рука',
              'руки',
              'рук'
            ])}
          </div>
          <div className="leg-count mar">
            {this.props.legsCount}{' '}
            {this.declensionOfNum(this.props.legsCount, [
              'нога',
              'ноги',
              'ног'
            ])}
          </div>
          <div className="cucumber-count mar">
            {this.props.cucumbersCount}{' '}
            {this.declensionOfNum(this.props.cucumbersCount, [
              'огурец',
              'огурца',
              'огурцов'
            ])}
          </div>
        </div>
      </div>
    );
  }
}

Bag.propTypes = {
  armsCount: PropTypes.number.isRequired,
  legsCount: PropTypes.number.isRequired,
  cucumbersCount: PropTypes.number.isRequired
};

export default Bag;
