const timer = (ms) => new Promise((res) => setTimeout(res, ms));

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export { timer, getRandomArbitrary };
