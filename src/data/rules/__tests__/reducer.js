import {
  updateRules,
  addRule,
  deleteRule,
  addCondition,
  deleteCondition,
  updateCondition
} from "../actions";

import rules from "../reducer";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(rules(undefined, {})).toEqual([]);
  });

  it("should update rules", () => {
    const payload = [
      {
        id: 1,
        conditions: []
      },
      {
        id: 2,
        conditions: []
      }
    ]
    expect(
      rules(undefined, {
        type: "UPDATE_RULES",
        rules: payload
      })
    ).toEqual(payload);
  });

  it("should add rules", () => {
    const payload = [
      {
        id: 1,
        conditions: []
      }
    ]
    expect(
      rules(undefined, {
        type: "ADD_RULE"
      })
    ).toEqual(payload);
  });

  it("should delete rules", () => {
    const data = [
      {
        id: 1,
        conditions: []
      }
    ]
    expect(
      rules(data, {
        type: "DELETE_RULE",
        ruleId: 1
      })
    ).toEqual([]);
  });

  it("should add rule condition", () => {
    const data = [
      {
        id: 1,
        conditions: []
      }
    ]

    const payload = [
      {
        id: 1,
        conditions: [
          {
            id: 1
          }
        ]
      }
    ]
    expect(
      rules(data, {
        type: "ADD_RULE_CONDITION",
        ruleId: 1
      })
    ).toEqual(payload);
  });

  it("should delete rule condition", () => {
    const data = [
      {
        id: 1,
        conditions: [
          {
            id: 1
          }
        ]
      }
    ]

    const payload = [
      {
        id: 1,
        conditions: []
      }
    ]
    expect(
      rules(data, {
        type: "DELETE_RULE_CONDITION",
        ruleId: 1,
        conditionId: 1
      })
    ).toEqual(payload);
  });

  it("should update rule condition", () => {
    const data = [
      {
        id: 1,
        conditions: [
          {
            id: 1,
            fact: "Test-fact",
            operator: "lessThan",
            value: "1000"
          }
        ]
      }
    ]

    const payload = [
      {
        id: 1,
        conditions: [
          {
            id: 1,
            fact: "Test-fact",
            operator: "lessThan",
            value: "3000"
          }
        ]
      }
    ]
    expect(
      rules(data, {
        type: "UPDATE_RULE_CONDITION",
        ruleId: 1,
        conditionId: 1,
        key: "value",
        value: "3000"
      })
    ).toEqual(payload);
  });
});
