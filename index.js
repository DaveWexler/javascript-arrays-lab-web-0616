const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var array = [...kittens, name];
  return array;
}

function prependKitten(name) {
  var array = [name, ...kittens];
  return array;
}

function removeLastKitten() {
  array = kittens.slice(0, 2);
  return array
}

function removeFirstKitten() {
  array = kittens.slice(1);
  return array;
}