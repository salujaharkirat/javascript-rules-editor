import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  addCondition,
  deleteRule
} from "data/rules/actions";

import Rule from "./Rule";


const propTypes = {
  rule: PropTypes.object.isRequired,
  deleteRule: PropTypes.func.isRequired
};


const RuleContainer = ({
  rule,
  addCondition,
  deleteRule
}) => {
  const add = () => {
    addCondition(rule.id)
  }

  const del = () => {
    if (rule.conditions.length > 0) {
      alert("please delete the conditions first");
      return null;
    }

    const r = window.confirm ("Are you sure you want to delete the rule?");
    if (r) {
      deleteRule(rule.id);
      return null;
    }
    return null;
  }

  return (
    <Rule
      rule={rule}
      addCondition={add}
      deleteRule={del}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCondition: (ruleId, condition) => {
    dispatch(addCondition(ruleId, condition))
  },
  deleteRule: (ruleId) => {
    dispatch(deleteRule(ruleId))
  }
});

const withStore = connect(null, mapDispatchToProps);


RuleContainer.propTypes = propTypes;

export default withStore(RuleContainer);
