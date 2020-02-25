import React from "react";

import Rules from "./Rules";

import RuleModel from "models/Rule";


class RulesContainer extends React.Component {
  state = {
    rules: []
  }

  componentDidMount () {
    // TODO: Make the api call and update the rules in state
    const rules =[
      {
        id: 1,
        name: "First Rule",
        conditions: [
          {
            id: 1,
            name: "First Condition",
            fact: "monthly rental amount",
            operator: "greaterThan",
            value: 1000
          },
          {
            id: 2,
            name: "Second Condition",
            fact: "Customer Age",
            operator: "lessThan",
            value: 21
          }
        ]
      },
      {
        id: 2,
        name: "Second Rule",
        conditions: [
          {
            id: 1,
            name: "First Condition",
            fact: "monthly rental amount",
            operator: "greaterThan",
            value: 1000
          },
          {
            id: 2,
            name: "Second Condition",
            fact: "Zip Code",
            operator: "isIn",
            value: [3,5,6]
          }
        ]
      },
      {
        id: 3,
        name: "Third Rule",
        conditions: [
          {
            id: 1,
            name: "First Condition",
            fact: "monthly rental amount",
            operator: "lessThanInclusive",
            value: 1000
          },
          {
            id: 2,
            name: "Second Condition",
            fact: "Order",
            operator: "hasA",
            value: "TV"
          }
        ]
      },
      {
        id: 4,
        name: "Fourth Rule",
        conditions: [
          {
            id: 1,
            name: "First Condition",
            fact: "Rental Tenure",
            operator: "lessThan",
            value: 3
          }
        ]
      }
    ]
    this.setState({rules});
  }

  addRule = (rule = {}) => {
    // const ruleModel = new RuleModel(rule);
    const ruleModel = {
      id: 5,
      conditions: []
    }

    this.setState({
      rules: [
        ...this.state.rules,
        ruleModel
      ]
    })
  }

  updateRule = (rule = {}) => {
    const rules = this.state.rules.map((datum) => {
      if (datum.id === rule.id) {
        return {
          ...datum,
          ...rule
        };
      }
      return datum;
    });

    this.setState({
      rules
    })
  }

  deleteRule = (rule = {}) => {
    const rules = this.state.rules.filter(datum => datum.id !== rule.id);
    this.setState({rules});
  }

  save = () => {
    // Call Save API
  }

  render () {
    return (
      <Rules
        rules={this.state.rules}
        addRule={this.addRule}
        deleteRule={this.deleteRule}
        updateRule={this.updateRule}
      />
    );
  }
}

export default RulesContainer;
