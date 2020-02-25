import React from "react";

import PropTypes from "prop-types";

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
  <div>
    <input
      name="fact"
      onChange={updateCondition}
      value={condition.fact}
      style={{margin: '0 10px 10px 0'}}
    />
    <input
      name="operator"
      onChange={updateCondition}
      value={condition.operator}
      style={{margin: '0 10px 10px 0'}}
    />
    <input
      name="value"
      onChange={updateCondition}
      value={condition.value}
      style={{margin: '0 10px 10px 0'}}
    />
    <button onClick={deleteCondition}>Delete Condition</button>
  </div>
);

Condition.propTypes = propTypes;

export default Condition;