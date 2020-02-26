import {
  updateRules,
  addRule,
  deleteRule,
  addCondition,
  deleteCondition,
  updateCondition
} from "../actions";

describe("actions", () => {
  it("should add rule", () => {
    const payload =   {
      id: 1,
      conditions: []
    };

    const expectedAction = {
      type: "ADD_RULE"
    };
    expect(addRule(payload)).toEqual(expectedAction);
  });

  it("should update rules", () => {
    const rules =  [
      {
        id: 1,
        conditions: []
      },
      {
        id: 2,
        conditions: []
      }
    ];

    const expectedAction = {
      type: "UPDATE_RULES",
      rules
    };
    expect(updateRules(rules)).toEqual(expectedAction);
  });

  it("should delete rule", () => {
    const ruleId = 1;

    const expectedAction = {
      type: "DELETE_RULE",
      ruleId
    };
    expect(deleteRule(ruleId)).toEqual(expectedAction);
  });

  it("should delete condition", () => {
    const ruleId = 1;
    const conditionId = 1;

    const expectedAction = {
      type: "DELETE_RULE_CONDITION",
      ruleId,
      conditionId
    };
    expect(deleteCondition(ruleId, conditionId)).toEqual(expectedAction);
  });


  it("should add condition", () => {
    const expectedAction = {
      type: "ADD_RULE_CONDITION"
    };
    expect(addCondition()).toEqual(expectedAction);
  });

  it("should update condition", () => {
    const ruleId = 1;
    const conditionId = 1;
    const key = "key";
    const value = "value";

    const expectedAction = {
      type: "UPDATE_RULE_CONDITION",
      ruleId,
      conditionId,
      key,
      value
    };
    expect(updateCondition(ruleId, conditionId, key, value)).toEqual(expectedAction);
  });
});
