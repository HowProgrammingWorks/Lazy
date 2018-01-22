'use strict';

const ops = {
  max: Math.max,
  sum: (...nums) => nums.reduce((a, b) => a + b),
  avg: (...nums) => ops.sum(...nums) / nums.length,
};

const lazy = (data) => new Proxy(data, {
  get: (data, key) => (ops[key] ? ops[key](...data) : data[key])
});

const data = lazy([10, -17, 0, 2, 9, -4, -1, 32, 14]);

console.dir({
  max: data.max,
  sum: data.sum,
  avg: data.avg,
});
