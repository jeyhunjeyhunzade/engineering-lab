function sum(a) {
  return function (b) {
    if (b == undefined) return a;
    return sum(a + b);
  };
}

// console.log("result: ", sum(1)(2)()); //  => tradeoff: you need empty call () at the end to signal

function sum2(a) {
  let total = a;

  function inner(b) {
    total += b;

    return inner; // returning itself for chaining
  }

  inner.valueOf = () => total;

  return inner;
}

console.log("result of sum2: ", +sum2(1)(2)); // JS asks "what's the number value of inner?" → valueOf() → 6
