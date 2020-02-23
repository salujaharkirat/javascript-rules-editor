# javascript-rules-editor
Rule based editor vanilla javascript

The project is a rule based editor which helps configure(add, delete, update) a set of rules that
need to be checked for any order placed on the application. If rules configured are checked, the maintainer
should be informed so that he can review the order.

The project is decoupled and mainly organized in the following files:-

1. Engine - The engine which will have a list of *Rule*
2. Rule - The rule will have a list of *Condition*
3. Condition - The condition will have a list of *Fact + Operator + Value*
4. Fact - The fact will details about the fact(Eg. name etc...)

The project is further extensible if we need to add **event** later on into the application.

Following is the payload that is sent to the backend store:-


[
  {
    id: 1,
    name: "First Rule",
    conditions: [
      {
        id: 1,
        name: "First Condition",
        fact: "monthly rental amount",
        operator: "greaterThan",
        value: 1000
      },
      {
        id: 2,
        name: "Second Condition",
        fact: "Customer Age",
        operator: "lessThan"
        value: 21
      }
    ]
  },
  {
    id: 2,
    name: "Second Rule",
    conditions: [
      {
        id: 1,
        name: "First Condition",
        fact: "monthly rental amount",
        operator: "greaterThan",
        value: 1000
      },
      {
        id: 2,
        name: "Second Condition",
        fact: "Zip Code",
        operator: "isIn"
        value: [3,5,6]
      }
    ]
  },
  {
    id: 3,
    name: "Third Rule",
    conditions: [
      {
        id: 1,
        name: "First Condition",
        fact: "monthly rental amount",
        operator: "lessThanInclusive",
        value: 1000
      },
      {
        id: 2,
        name: "Second Condition",
        fact: "Order",
        operator: "hasA"
        value: "TV"
      }
    ]
  },
  {
    id: 4,
    name: "Fourth Rule",
    conditions: [
      {
        id: 1,
        name: "First Condition",
        fact: "Rental Tenure",
        operator: "lessThan",
        value: 3
      }
    ]
  }
]