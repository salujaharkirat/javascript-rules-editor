// const UPDATE = "payment/amount/UPDATE";

const updateRules = (rules) => {
  return {
    type: "UPDATE_RULES",
    rules
  }
}

const addRule = () => {
  return {
    type: "ADD_RULE"
  };
};

const deleteRule = (ruleId) => {
  return {
    type: "DELETE_RULE",
    ruleId
  }
}

const addCondition = (ruleId) => {
  return {
    type: "ADD_RULE_CONDITION",
    ruleId
  }
}

const deleteCondition = (ruleId, conditionId) => {
  return {
    type: "DELETE_RULE_CONDITION",
    ruleId,
    conditionId
  }
}

const updateCondition = (ruleId, conditionId, key, value) => {
  return {
    type: "UPDATE_RULE_CONDITION",
    ruleId,
    conditionId,
    key,
    value
  }
}

export {
  addRule,
  updateRules,
  deleteRule,
  addCondition,
  deleteCondition,
  updateCondition
};
