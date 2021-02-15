export class DataQuery {
  constructor() {

  }

  filter; // Expression
  order; // Order
  take; // number
  skip; // number
}

class Order {
  fields; // array of FieldExpression
}

class Operator {
  // equalr, less, more
}

class Expression {

}

class ValueExpression extends Expression {

}

class FieldExpression extends Expression {

}

class BinaryExpression extends Expression {
  leftExpression;
  operator;
  rightExpression;
}

class UnaryExpression extends Expression {
  operator;
  expression;
}
