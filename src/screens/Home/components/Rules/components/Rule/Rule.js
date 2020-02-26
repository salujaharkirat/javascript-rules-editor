import React from "react";
import PropTypes from "prop-types";

import Condition from "./components/Condition";

import RoundedIcon from "components/RoundedIcon";

import doc from "./images/doc.svg";
import add from "./images/add.svg";
import deleteIcon from "./images/delete.svg";

import Text from "components/Text";

require("./Rule.css");


const propTypes = {
  deleteRule: PropTypes.func.isRequired,
  rule: PropTypes.object.isRequired,
  addCondition: PropTypes.func.isRequired
};

const Rule = ({
  rule,
  deleteRule,
  addCondition
}) => {
  const content = rule.conditions.map((condition, index) =>
    (rule.conditions.length -1 === index)
    ? (
      <Condition
        key={condition.id}
        condition={condition}
        ruleId={rule.id}
      />
    ) : (
      <div key={condition.id}>
        <Condition
          condition={condition}
          ruleId={rule.id}
        />
        <div className="separator">
          <Text className="separator-text">and</Text>
        </div>
      </div>
    )
  )
  return (
    <div className='rule-container'>
      <div className="header">
        <div className="rule-icon-container">
          <RoundedIcon className='doc-icon'>
            <img
              src={doc}
              className="App-logo"
              alt="logo"
            />
          </RoundedIcon>
          <Text className='description'>
            When
            &nbsp;
              <Text className="highlighted-text">
                All
              </Text>
              &nbsp;
            of the conditions meet
          </Text>
        </div>
        <div className='delete-icon-container'>
          <img
            src={deleteIcon}
            onClick={() => deleteRule(rule.id)}
            alt="Delete Rule"
          />
        </div>
      </div>
      <div className='content'>
        {content}
      </div>
      <div
        onClick={addCondition}
        className='add-condition-container'
      >
        <div className='add-condition'>
          <RoundedIcon className='add-icon'>
            <img
              src={add}

              alt="Add Condition"
            />
          </RoundedIcon>
          <div className='add-condition-text'>
            <Text>
              Add Condition
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}


Rule.propTypes = propTypes;

export default Rule;
