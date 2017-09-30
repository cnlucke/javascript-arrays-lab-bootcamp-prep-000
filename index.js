const kittens = "I don't do much"

function kittens() {
  kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens()
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens()
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens()
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens()
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  kittens()
  var newArray = kittens
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  kittens()
  var newArray = kittens
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  kittens()
  var newArray = kittens
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  kittens()
  var newArray = kittens
  newArray.shift()
  return newArray
}
