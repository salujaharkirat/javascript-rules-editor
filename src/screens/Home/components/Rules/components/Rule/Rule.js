import React from "react";
import PropTypes from "prop-types";

import Condition from "./components/Condition";


const propTypes = {
  // deleteCondition: PropTypes.func.isRequired,
  deleteRule: PropTypes.func.isRequired,
  rule: PropTypes.object.isRequired,
  addCondition: PropTypes.func.isRequired
};

const Rule = ({
  rule,
  deleteRule,
  addCondition
}) => {
  const content = [];
  for (const condition of rule.conditions) {
    content.push(
      <Condition
        key={condition.id}
        condition={condition}
        ruleId={rule.id}
      />
    );
  }
  return (
    <div style={{border: '1px solid', marginTop: '30px', width: '50%', padding: '30px'}}>
      {content}
      <button onClick={() => deleteRule(rule.id)}>
        Delete rule
      </button>
      <button onClick={addCondition}> Add condition</button>
    </div>
  )
}


Rule.propTypes = propTypes;

export default Rule;
