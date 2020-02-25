import React from "react";
import PropTypes from "prop-types";

import Rule from "./components/Rule";


const propTypes = {
  addRule: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired
};

const Rules = ({
  rules,
  addRule,
}) => {
  const content = [];
  for (const rule of rules) {
    content.push(
      <Rule
        key={rule.id}
        rule={rule}
      />
    );
  }

  return (
    <div>
      {content}
      <button onClick={addRule}>
        Add Rule
      </button>
    </div>
  );
}

Rules.propTypes = propTypes;

export default Rules;