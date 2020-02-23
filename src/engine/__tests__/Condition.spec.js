import Condition from "../Condition";

describe("Condition", () => {
  test("Should get condition", () => {
    const data = {
      id: 1,
      name: "First Condition",
      fact: "monthly rental amount",
      operator: "greaterThan",
      value: 1000
    };

    const condition = new Condition(data);
    expect(condition.id).toBe(data.id);
    expect(condition.name).toBe(data.name);
    expect(condition.fact).toBe(data.fact);
    expect(condition.operator).toBe(data.operator);
    expect(condition.value).toBe(data.value);
  });
});

