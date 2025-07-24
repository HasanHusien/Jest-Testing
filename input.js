/*
[1] if name is defind will returned unknown
[2] if found space it will removed
[3] returned  at highlest 10 letters
[4] if found underScore it will removed

*/

function filterName(name){
  if( name === undefined){
    name = 'UnKnown'
  }
  if(name.startsWith(" ") || name.endsWith(" ")){
    name = name.trim()
  }
  if(name.length > 10){
    name = name.substring(0,10)
  }
  if(name.startsWith('_')){
    name = name.substring(1)
  }
  return name
}
module.exports = filterName

console.log()