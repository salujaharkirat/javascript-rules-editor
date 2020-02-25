const RULES =[
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
        operator: "lessThan",
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
        operator: "isIn",
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
        operator: "hasA",
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

export default RULES;
