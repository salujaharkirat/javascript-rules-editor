import React from "react";

import PropTypes from "prop-types";



import Text from "components/Text";
import RoundedIcon from "components/RoundedIcon";

import conditionIcon from "./images/condition.svg";
import deleteIcon from "./images/delete.svg";

import Select from "./components/Select";

require("./Condition.css");


const propTypes = {
  condition: PropTypes.object.isRequired,
  deleteCondition: PropTypes.func.isRequired,
  ruleId: PropTypes.number.isRequired,
  updateCondition: PropTypes.func.isRequired
};


const Condition = ({
  condition,
  ruleId,
  updateCondition,
  deleteCondition
}) => (
  <div className='condition-container'>
    <div className='left'>
      <RoundedIcon className='condition-icon'>
        <img
          src={conditionIcon}
          className="App-logo"
          alt="logo"
        />
      </RoundedIcon>
    </div>
    <div className='center'>
      <Text className='dark-text'>When&nbsp;</Text>
      &nbsp;
      <input
        name="fact"
        onChange={updateCondition}
        value={condition.fact}
        className="input-field"
        placeholder="fact"
      />
      &nbsp;
      &nbsp;
      <Select
        selectedOption={condition.operator}
        conditionId={condition.id}
        ruleId={ruleId}
      />
      &nbsp;
      &nbsp;
      <input
        name="value"
        onChange={updateCondition}
        value={condition.value}
        className="input-field"
        placeholder="value"
      />
    </div>
    <div className='right'>
      <img
        src={deleteIcon}
        onClick={deleteCondition}
        alt="Delete Condition"
        className="delete-icon"
      />
    </div>
  </div>
);

Condition.propTypes = propTypes;

export default Condition;