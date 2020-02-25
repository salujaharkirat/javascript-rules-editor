import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {
  updateRules,
  addRule
} from "data/rules/actions";

import Rules from "./Rules";

import RULES from "./__mocks__";

const propTypes = {
  addRule: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired,
  updateRules: PropTypes.func.isRequired
}


class RulesContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    // TODO: Call API and update
    this.props.updateRules(RULES);
    this.setState({
      loading: false
    });

  }

  render () {
    if (this.state.loading) {
      return null;
    }

    return (
      <Rules
        addRule={this.props.addRule}
        rules={this.props.rules}
      />
    );
  }
}


const mapStateToProps = (store) => ({
  rules: store.rules
});

const mapDispatchToProps = (dispatch) => ({
  updateRules: (rules) => {
    dispatch(updateRules(rules))
  },
  addRule: () => {
    dispatch(addRule())
  }
});

const withStore = connect(mapStateToProps, mapDispatchToProps);

RulesContainer.propTypes = propTypes;

export default withStore(RulesContainer);