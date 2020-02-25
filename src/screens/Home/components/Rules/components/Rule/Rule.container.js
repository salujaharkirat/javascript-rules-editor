import React from "react";
import PropTypes from "prop-types";

import Rule from "./Rule";


const propTypes = {
  rule: PropTypes.object.isRequired,
  deleteRule: PropTypes.func.isRequired,
  updateRule: PropTypes.func.isRequired
};



class RuleContainer extends React.Component {
  addCondition = (event) => {
    const rule = {
      ...this.props.rule,
      conditions: [
        ...this.props.rule.conditions,
        {}
      ]
    }
    this.props.updateRule(rule);
  }

  deleteCondition = (condition = {}) => {
    const conditions = this.props.rule.conditions.filter(datum => datum.id !== condition.id);
    const rule = {
      ...this.props.rule,
      conditions
    }

    this.props.updateRule(rule);
  }

  updateCondition = (condition = {})  => {
    const conditions = this.props.rule.conditions.map((datum) => {
      if (datum.id === condition.id) {
        return {
          ...datum,
          ...condition
        };
      }
      return datum;
    });

    const rule = {
      ...this.props.rule,
      conditions
    };

    this.props.updateRule(rule);
  }

  render () {
    return (
      <div>
        <Rule
          rule={this.props.rule}
          deleteCondition={this.deleteCondition}
          updateCondition={this.updateCondition}
        />
        <button onClick={this.addCondition}>Add condition</button>
      </div>

    );
  }
}

RuleContainer.propTypes = propTypes;

export default RuleContainer;