function counter(params) {
  if(!Array.isArray(params)) throw new Error('params is not array');
  return params.reduce((accu, curr) => accu + curr);
}

module.exports = counter;