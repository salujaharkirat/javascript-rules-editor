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
    />
    <input
      name="operator"
      onChange={updateCondition}
      value={condition.operator}
    />
    <input
      name="value"
      onChange={updateCondition}
      value={condition.value}
    />
    <button onClick={deleteCondition}>Delete Condition</button>
  </div>
);

Condition.propTypes = propTypes;

export default Condition;