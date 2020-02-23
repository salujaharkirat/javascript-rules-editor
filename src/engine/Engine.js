import Rule from "./Rule";

class Engine {
  constructor (rules = []) {
    this.rules = [];

    rules.map((rule) => this.addRule(rule));
  }

  addRule (rule) {
    if (!rule) {
      console.warn("Please pass a rule");
      return null;
    }

    const ruleObject = new Rule(rule);
    this.rules.push(ruleObject);
    return this.rules;
  }

  updateRule (rule) {
    if (!rule) {
      console.warn("Please pass a rule");
      return null;
    }

    this.rules.map((datum) => {
      if (datum.id === rule.id) {
        return {
          ...datum,
          ...rule
        };
      }
      return datum;
    });
  }

  deleteRule (rule) {
    if (!rule) {
      console.warn("Please pass a rule");
      return null;
    }
    const filteredRules = this.rules.filter(datum => datum.id !== rule.id);
    this.rules = [...filteredRules];
    return this.rules;
  }
}

export default Engine;
