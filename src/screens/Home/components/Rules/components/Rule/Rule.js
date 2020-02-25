import React from "react";
import PropTypes from "prop-types";

import Condition from "./components/Condition";


const propTypes = {
  deleteCondition: PropTypes.func.isRequired,
  rule: PropTypes.object.isRequired,
  updateCondition: PropTypes.func.isRequired
};

const Rule = ({
  rule,
  deleteCondition,
  updateCondition
}) => {
  const content = [];
  for (const condition of rule.conditions) {
    content.push(
      <Condition
        key={condition.id}
        deleteCondition={deleteCondition}
        condition={condition}
        updateCondition={updateCondition}
      />
    );
  }
  return (
    <div>
      {content}
    </div>
  )
}


Rule.propTypes = propTypes;

export default Rule;
