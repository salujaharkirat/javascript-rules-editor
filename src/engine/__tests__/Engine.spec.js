import Engine from "../Engine";

describe("Engine", () => {
  let rules = [];
  beforeAll(() => {
    rules = [
      {
        id: 1,
        name: "Rule 1"
      },
      {
        id: 2,
        name: "Rule 2"
      }
    ];
  });

  test("Should generate rules", () => {
    const engine = new Engine(rules);
    expect(engine.rules.length).toBe(2);
  });
  test("Should add rules", () => {
    const engine = new Engine(rules);
    const rule = {
      id: 3,
      name: "Rule 3"
    };
    engine.addRule(rule);
    expect(engine.rules.length).toBe(3);
  });
  test("Should delete rules", () => {
    const engine = new Engine(rules);
    const rule = {
      id: 1,
      name: "Rule 1"
    };
    engine.deleteRule(rule);
    expect(engine.rules.length).toBe(1);
  });
  test("Should update rules", () => {
    const engine = new Engine(rules);
    const rule = {
      id: 1,
      name: "Rule 1 updated"
    };
    engine.updateRule(rule);
    expect(engine.rules.length).toBe(2);
  });
});
