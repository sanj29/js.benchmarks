// Trigger 1 - Math.Random
function makeRandom1() {
  var min = 1;
  var max = 10;
  var rnd1 = Math.floor(Math.random() * (max - min) + min);
  return rnd1;
}

// Trigger 2 - RandomSource.getRandomValues()
function makeRandom2() {
  var array = new Uint32Array(1);
  var rnd2 = window.crypto.getRandomValues(array);
  return rnd2[0];
}