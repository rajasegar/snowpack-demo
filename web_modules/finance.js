import { m as multiply, d as divide, a as add } from './common/index-esm-01ac6ca1.js';

function simpleInterestPrincipal(principal, rate, time) {
  return multiply(
    principal,
    add(1, multiply(divide(rate,100),
    time)));
}

function simpleInterest(principal, rate, time) {
  return multiply(principal, divide(rate,100));
}

export { simpleInterest, simpleInterestPrincipal };
