import React from "react";

import PropTypes from "prop-types";

import conditionIcon from "./images/condition.svg";
import deleteIcon from "./images/delete.svg";

const propTypes = {
  condition: PropTypes.object.isRequired,
  deleteCondition: PropTypes.func.isRequired,
  updateCondition: PropTypes.func.isRequired
};


const Condition = ({
  condition,
  updateCondition,
  deleteCondition
}) => (
  <div
    style={{
      background: "#FFE7E5",
      marginTop: 10,
      border: '1px solid #F77566',
      borderRadius: '2em 0.8em 0.8em 2em',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <div
      style={{
        background: '#F77566',
        padding: 5,
        borderRadius: '2em'
      }}
    >
      <img
        src={conditionIcon}
        className="App-logo"
        alt="logo"
      />
    </div>
    <div>
      <span>When</span>
      <input
        name="fact"
        onChange={updateCondition}
        value={condition.fact}
        style={{
          background: 'transparent',
          border: 'none',
          textDecoration: 'underline'
        }}
      />
    </div>

    <input
      name="operator"
      onChange={updateCondition}
      value={condition.operator}
      style={{
        background: 'transparent',
        border: 'none',
        textDecoration: 'underline'
      }}
    />
    <input
      name="value"
      onChange={updateCondition}
      value={condition.value}
      style={{
        background: 'transparent',
        border: 'none',
        textDecoration: 'underline'
      }}
    />
    <img
      src={deleteIcon}
      onClick={deleteCondition}
      className="App-logo"
      alt="logo"
    />
  </div>
);

Condition.propTypes = propTypes;

export default Condition;