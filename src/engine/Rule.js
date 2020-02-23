import Condition from "./Condition";

class Rule {
  constructor (rule = {}) {
    if (!rule.conditions) {
      console.warn("Please pass conditions for the rule");
    }
    if (!rule.id) {
      console.warn("Please pass id for the rule");
    }
    this.conditions = [];
    this.name = rule.name || "";
    this.id = rule.id;

    // TODO: Check if type if array
    rule.conditions && rule.conditions.map(condition => this.addCondition(condition));
  }

  addCondition (condition = {}) {
    const conditionObject = new Condition(condition);
    this.conditions.push(conditionObject);
    return this.rules;
  }
}

export default Rule;
