const kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift
  return kittens
}

function appendKitten(name) {
  newArray = kittens
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  newArray = kittens
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  newArray = kittens
  newArray.pop
  return newArray
}

function removeFirstKitten() {
  newArray = kittens
  newArray.shift
  return newArray
}
