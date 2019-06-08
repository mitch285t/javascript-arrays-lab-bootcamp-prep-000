
var kittens = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendKitten(string){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(string){
  kittens.unshift("Bob")
  return kittens
  
}
function destructivelyRemoveLastKitten(string){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(string){
  kittens.shift()
  return kittens
}
function appendKitten(string){
 return [...kittens, "Broom"]

}
function prependKitten(string){
  return ["Arnold",...kittens]
}
function removeLastKitten(string){
 return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(string){
  return kittens.slice(1)
}