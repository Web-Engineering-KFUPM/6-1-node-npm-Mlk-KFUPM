import _ from "lodash";

export function parseNumbers(input) {
  const parsed = _.map(input, (value) => Number(value));
  return _.filter(parsed, (num) => !Number.isNaN(num));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
