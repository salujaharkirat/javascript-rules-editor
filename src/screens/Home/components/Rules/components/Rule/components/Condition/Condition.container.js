import React from "react";
import PropTypes from "prop-types";

import Condition from "./Condition";


const propTypes = {
  condition: PropTypes.object.isRequired,
  deleteCondition: PropTypes.func.isRequired,
  updateCondition: PropTypes.func.isRequired
}

class ConditionContainer extends React.Component {

  updateCondition = (event) => {
    const condition = {
      ...this.props.condition,
      [event.target.name]: event.target.value
    }
    this.props.updateCondition(condition);
  }

  render () {
    return (
      <Condition
        condition={this.props.condition}
        updateCondition={this.updateCondition}
        deleteCondition={this.props.deleteCondition}
      />
    );
  }
}

ConditionContainer.propTypes = propTypes;

export default ConditionContainer;
