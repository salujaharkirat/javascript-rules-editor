import React from "react";
import {connect} from "react-redux";

import {updateCondition} from "data/rules/actions";

import Select from "./Select";

const OPTIONS = {
  Equal: "equal",
  NotEqual: "notEqual",
  In: "in",
  NotIn: "notIn",
  Contains: "contains",
  DoesNotContain: "doesNotContain",
  LessThan: "lessThan",
  LessThanInclusive: "lessThanInclusive",
  MoreThan: "moreThan",
  MoreThanInclusive: "moreThanInclusive",
  IsIn: "isIn",
};


class SelectContainer extends React.Component {
  state = {
    showDetail: false,
  }

  myRef = React.createRef();


  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.toggleDetail();
    }
  };


  updateOption = (option) => {
    this.props.updateCondition(
      this.props.ruleId,
      this.props.conditionId,
      "operator",
      option.target.innerHTML
    );
    this.toggleDetail();
  }

  toggleDetail = () => {
    this.setState({showDetail: !this.state.showDetail});
  }

  render () {
    const {selectedOption} = this.props;
    return (
      <Select
        myRef={this.myRef}
        options={OPTIONS}
        updateOption={this.updateOption}
        selectedOption={selectedOption}
        showDetail={this.state.showDetail}
        toggleDetail={this.toggleDetail}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCondition: (ruleId, conditionId, key, value) => {
    dispatch(updateCondition(ruleId, conditionId, key, value))
  }
});

const withStore = connect(null, mapDispatchToProps);

export default withStore(SelectContainer);
