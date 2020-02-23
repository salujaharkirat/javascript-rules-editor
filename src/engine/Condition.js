// import Fact from "./Fact";

class Condition {
  constructor (condition = {}) {
    if (!condition.id) {
      console.warn("Please pass id for the condition");
    }

    if (!condition.name) {
      console.warn("Please pass condition name");
    }

    if (!condition.value) {
      console.warn("Please pass value for the condition");
    }

    if (!condition.operator) {
      console.warn("Please pass condition operator");
    }

    if (!condition.fact) {
      console.warn("Please pass condition fact");
    }

    this.id = condition.id;
    this.name = condition.name;
    this.value = condition.value;
    this.operator = condition.operator;
    this.fact = condition.fact;
  }
}

export default Condition;
