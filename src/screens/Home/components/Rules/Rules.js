import React from "react";
import PropTypes from "prop-types";

import add from "./images/add.svg";

import Rule from "./components/Rule";

import RoundedIcon from "components/RoundedIcon";
import Text from "components/Text";

require("./Rules.css");


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
    <div className='rules-container'>
      <div
        onClick={addRule}
        className='add-rules-container'
      >
        <div className='add'>
          <RoundedIcon className='add-image'>
            <img
              src={add}
              alt="Add Condition"
            />
          </RoundedIcon>
          <div>
            <Text className='add-rules-text'>
              Add Rule
            </Text>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
}

Rules.propTypes = propTypes;

export default Rules;