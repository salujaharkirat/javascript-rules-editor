const rules = (state = [], action) => {
  switch(action.type) {
    case "UPDATE_RULES": {
      return [
        ...state,
        ...action.rules
      ]
    }
    case "ADD_RULE": {
      return [
        ...state,
        {
          id: state.length + 1,
          conditions: []
        }
      ]
    }
    case "DELETE_RULE": {
      return [...state.filter(rule => rule.id !== action.ruleId)];
    }
    case "ADD_RULE_CONDITION": {
      return state.map(rule =>
        (rule.id === action.ruleId)
        ? {
            ...rule,
            conditions: [
              ...rule.conditions,
              {
                id: rule.conditions.length + 1
              }
            ]
          }
          : rule
      )
    }
    case "DELETE_RULE_CONDITION": {
      return state.map(rule =>
        (rule.id === action.ruleId)
        ? {
          ...rule,
          conditions: rule.conditions.filter(condition => condition.id !== action.conditionId)
        }
        : rule
      )
    }
    case "UPDATE_RULE_CONDITION": {
      return state.map(rule => {
        if (rule.id === action.ruleId) {
          const temp =  rule.conditions.map(condition => {
            if (condition.id === action.conditionId) {
              return {
                ...condition,
                [action.key]: action.value
              }
            }
            return condition
          })
          return {
            ...rule,
            conditions: temp
          }
        }
        return rule
      })
    }
    default:
      return state
  }
}

export default rules;



