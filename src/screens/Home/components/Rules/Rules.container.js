import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import axios from "axios";

import DATA from "./__mocks__";

import {
  updateRules,
  addRule
} from "data/rules/actions";

import Rules from "./Rules";


const propTypes = {
  addRule: PropTypes.func.isRequired,
  rules: PropTypes.array.isRequired,
  updateRules: PropTypes.func.isRequired
}

const RULES_API_ENDPOINT = 'http://localhost:3002/api/v0/rules';


class RulesContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    axios.get(RULES_API_ENDPOINT)
      .then(({data}) => {
        this.props.updateRules(data.data);

      })
      .catch((error) => {
        this.props.updateRules(DATA);
        alert('Please check if the API server is Up!!');
        console.log(error);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      })

  }

  onSave = () => {
    const payload = {
      rules: this.props.rules
    };
    axios.post(`${RULES_API_ENDPOINT}/add-rules`, payload)
      .then(({data}) => {
        alert("Successfully saved");
      })
      .catch((error) => {
        alert("Failed");
      })
  }

  render () {
    if (this.state.loading) {
      return null;
    }

    return (
      <Rules
        addRule={this.props.addRule}
        rules={this.props.rules}
        onSave={this.onSave}
      />
    );
  }
}


const mapStateToProps = (store) => ({
  rules: store.rules
});

const mapDispatchToProps = (dispatch) => ({
  updateRules: (rules) => {
    console.log("Rules", rules);
    dispatch(updateRules(rules))
  },
  addRule: () => {
    dispatch(addRule())
  }
});

const withStore = connect(mapStateToProps, mapDispatchToProps);

RulesContainer.propTypes = propTypes;

export default withStore(RulesContainer);