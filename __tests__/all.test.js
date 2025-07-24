/*
  - global and smart methods on jest 
  - Using Matchers
  [1] toHaveLength()
  [2] toContain()
  [3] not.toContain()
  [4] toBeFalsy()             ==   false
  [5] toBeLessThan()
  [6] toBeGreaterThanOrEqual()
  [7] toBeGreaterThan()
  [8] toBeTruthy()
  [9] toEqual()
  [10] toBeUndefined
  [11] toMatch(/test/)
  [12] toHaveProperty()
  [13] expect.anything()
  [14] expect.any()
  [15] expect.arrayContaining(array)

 */

let allData = require('../all');

test('toContain', ()=> {
  expect(allData).toContain(1)
})

test('not.toContain', () => {                     
  expect(allData).not.toContain(9)
})

test('normal way', ()=> {
  expect(allData.length).toBe(7)  
})

test('toHaveLength', ()=> {
  expect(allData).toHaveLength(7) // the same result on top ^ 
})

test('not.toContain', ()=> {
  for(let i =0; i < allData.length; i++){
    expect(allData[i]).not.toContain(9)
  }
})
test('if ite equal false', ()=> {
  for(let i =0; i < allData.length; i++){
    expect(isNaN(allData[i])).toBe(false)
  }
})
test(' if ite equal false', ()=> {
  for(let i =0; i < allData.length; i++){
    expect(isNaN(allData[i])).toBeFalsy()  // ult on top ^ 
  }
})
test('if ite equal false', ()=> {
  for(let i =0; i < allData.length; i++){
    expect(isNaN(allData[i])).not.toBeTruthy()  // ult on top ^ 
  }
})

test('if it bigger then ', ()=> {
  expect(allData[0]).toBeGreaterThan(1);
})

test('if it bigger then or equal', ()=> {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
})

test('if it smaller then', ()=> {
  expect(allData[0]).toBeLessThan(5);
})


describe('string and obj and Regex', () => {

  test('toBeUndefined', () => {
    let a;
    expect(a).toBeUndefined()
  })

  test('Regex', () => {
    let a = ' i love java script ';
    expect(a).toMatch(/java/)
  })

  test('obj', () => {
    let  data = {name: 'hassan',age:21,
      }
    expect(data).toHaveProperty('age')
  })

    test('obj with expect value', () => {
    let  data = {name: 'hassan',age:21,}
    expect(data).toHaveProperty('age', 21)
  })

})

test('for is any thing', () => {
  expect(allData).toEqual(expect.anything())
  expect("hassan").toEqual(expect.anything())
  expect([1,2,3]).toEqual(expect.anything())
  expect(55).toEqual(expect.anything())

})

test('expect any type', () => {
  expect(1).toEqual(expect.any(Number))
  expect('hassan').toEqual(expect.any(String))
  expect([1,2,3]).toEqual(expect.any(Array))
  expect(user = {name: 'hassan', age: '21'}).toEqual(expect.any(Object))
})

test('make check is it hire', () => {
  let data = [1, 2, 3, 4, 5, 6]
  expect(data).toEqual(expect.arrayContaining([1, 4, 3, 6]))
})
