const kittens = "I don't do much"

function kittens() {
  kittens = ["Milo", "Otis", "Garfield"]
}

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
  3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:29:7)
4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
   ReferenceError: destructivelyRemoveFirstKitten is not defined
    at Context.<anonymous> (test/index-test.js:37:7)
5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
   ReferenceError: appendKitten is not defined
    at Context.<anonymous> (test/index-test.js:45:14)
6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
   ReferenceError: prependKitten is not defined
    at Context.<anonymous> (test/index-test.js:53:14)
7) Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged:
   ReferenceError: removeLastKitten is not defined
    at Context.<anonymous> (test/index-test.js:61:14)
8) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
   ReferenceError: removeFirstKitten is not defined
    at Context.<anonymous> (test/index-test.js:69:14)
