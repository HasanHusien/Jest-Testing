/*
  using rest pram with ES6
  [1] if no found num returned zero
  [2] if there num returned this num
  [2] if thire any num it will sum tigther
*/
let theSum = (num,num2,num3) =>{
  return (num || 0)+ (num2 || null) + (num3 || null); 
}

function theSum2(num,num2,num3) {
  return (num || 0)+ (num2 || null) + (num3 || null); 
}

let theBSum = (...arg) => arg.reduce((prev,cur) => prev + cur , 0);

module.exports = theBSum;