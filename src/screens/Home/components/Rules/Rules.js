import React from "react";
import PropTypes from "prop-types";

import add from "./images/add.svg";

import Rule from "./components/Rule";

import RoundedIcon from "components/RoundedIcon";
import Text from "components/Text";

require("./Rules.css");


const propTypes = {
  addRule: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};

const Rules = ({
  rules,
  addRule,
  onSave
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
      <div
        onClick={onSave}
        className='save-rules-container'
      >
        <div className='add'>
          <RoundedIcon className='save-image'>
            <img
              src={add}
              alt="Save Rules"
            />
          </RoundedIcon>
          <div>
            <Text className='save-rules-text'>
              Save Rules
            </Text>
          </div>
        </div>
      </div>
      {content}
      <button onClick={onSave}>Save</button>
    </div>
  );
}

Rules.propTypes = propTypes;

export default Rules;