import Rule from "../Rule";

describe("Rule", () => {
  test("Should get rule", () => {
    const data = {
      id: 1,
      name: "Rule 1",
      conditions: []
    };
    const rule = new Rule(data);
    expect(rule.id).toBe(data.id);
    expect(rule.name).toBe(data.name);
  });

  test("Should have rule conditions", () => {
    const data1 = {
      id: 1,
      name: "Rule 1",
      conditions: []
    };
    const rule1 = new Rule(data1);
    expect(rule1.conditions.length).toBe(0);

    const data2 = {
      id: 1,
      name: "Rule 1",
      conditions: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    };
    const rule2 = new Rule(data2);
    expect(rule2.conditions.length).toBe(2);
  });
});
