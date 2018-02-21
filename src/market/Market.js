import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Market.css';

class Market extends Component {
  render() {
    return (
      <div className="Market">
        <div className="ingredient-buy">
          <button className="btn arm" onClick={() => {
            this.props.addArm();
            this.props.payArm();
          }}>
            Купить ручку
          </button>
          <div className="price">2 монеты</div>
        </div>
        <div className="ingredient-buy">
          <button className="btn leg" onClick={() => {
            this.props.addLeg();
            this.props.payLeg();
          }}>
            Купить ножку
          </button>
          <div className="price">3 монеты</div>
        </div>
        <div className="ingredient-buy">
          <button className="btn cucumber" onClick={() => {
            this.props.addCucumber();
            this.props.payCucumber();
          }}>
            Купить огуречик
          </button>
          <div className="price">5 монет</div>
        </div>
      </div>
    );
  }
}

Market.propTypes = {
  addArm: PropTypes.func.isRequired,
  addLeg: PropTypes.func.isRequired,
  addCucumber: PropTypes.func.isRequired,
  payArm: PropTypes.func.isRequired,
  payLeg: PropTypes.func.isRequired,
  payCucumber: PropTypes.func.isRequired
};

export default Market;
