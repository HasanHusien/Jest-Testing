/*
  using rest pram with ES6
  [1] if no found num returned zero
  [2] if there num returned this num
  [2] if thire any num it will sum tigther

  Global Method test && discripe
  -test => (name , functions ,timeout)
  -discribe => (name , function) its optional

  - skip && only used for save time 
  [1] skip for make it didnt work for a while
  [2] only for make it work only this test 
*/

let theSum = require('../sum');

describe('return the num', () => {

  it.skip('retutn zero if null', () => {
    expect(theSum()).toBe(0)
  });
  it('retutn num', () => {
    expect(theSum(10)).toBe(10)
  });
  it('retutn num + num2', () => {
    expect(theSum(10, 20)).toBe(30)
  });
  it('retutn any num' , () => {
    expect(theSum(10, 20, 10, 20, 40)).toBe(100)
  });
  
})
