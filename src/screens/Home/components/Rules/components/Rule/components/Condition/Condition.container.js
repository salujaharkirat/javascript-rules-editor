import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  updateCondition,
  deleteCondition
} from "data/rules/actions";

import Condition from "./Condition";


const propTypes = {
  condition: PropTypes.object.isRequired,
  ruleId: PropTypes.number.isRequired,
  deleteCondition: PropTypes.func.isRequired,
  updateCondition: PropTypes.func.isRequired
}

const ConditionContainer = ({
  condition,
  ruleId,
  updateCondition,
  deleteCondition
}) => {
  const update = (event) => {
    updateCondition(ruleId, condition.id, event.target.name, event.target.value);
  }

  const del = () => {
    const r = window.confirm ("Are you sure you want to delete the condition?");
    if (r) {
      deleteCondition(ruleId, condition.id);
      return null;
    }
    return null;
  }

  return (
    <Condition
      condition={condition}
      updateCondition={update}
      deleteCondition={del}
      ruleId={ruleId}
    />
  );
}


const mapDispatchToProps = (dispatch) => ({
  updateCondition: (ruleId, conditionId, key, value) => {
    dispatch(updateCondition(ruleId, conditionId, key, value))
  },
  deleteCondition: (ruleId, conditionId) => {
    dispatch(deleteCondition(ruleId, conditionId))
  }
});

const withStore = connect(null, mapDispatchToProps);

ConditionContainer.propTypes = propTypes;

export default withStore(ConditionContainer);
