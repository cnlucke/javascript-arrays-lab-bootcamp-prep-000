//const kittens = "I don't do much"

function setKittens() {
  kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  setKittens()
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  setKittens()
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  setKittens()
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  setKittens()
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  setKittens()
  var newArray = kittens
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  setKittens()
  var newArray = kittens
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  setKittens()
  var newArray = kittens
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  setKittens()
  var newArray = kittens
  newArray.shift()
  return newArray
}
