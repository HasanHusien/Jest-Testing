let arr = require('../ownMatchers')

// [1]
expect.extend({
  biggerThan (recived, target) {
    const pass =  recived > target

    if(pass) {
      return {
        message: () => `Expectes ${recived} larger than ${target}`,
        pass : true,
      };
      
    }else {
      return {
      message: () => `Error Expectes ${recived} larger than ${target}`,
      pass : false,
      }
    }
  }
})

// [2]
expect.extend({
  smallerThan (recived, target) {
    const pass =  recived < target

    if(pass) {
      return {
        message: () => `Expectes ${recived} larger than ${target}`,
        pass : true,
      };

    }else {
      return {
      message: () => `Error Expectes ${recived} larger than ${target}`,
      pass : false,
      }
    }
  }
})


test('my match', () => {
  expect(10).biggerThan(5)
})

test ('pla', () => {
  expect(arr[0]).smallerThan(arr[2])
})


// [3]
expect.extend({
  between(received, start, end){
    const pass = received > start && received < end;

    if(pass){
      return {
        message:() => `Recevid ${received} and Bigger then ${start} and smaller than ${end}`,
        pass : true,
      };

    }else {
      return {
        message: () => `Recevid ${received} and Bigger then ${start} and smaller than ${end}`,
        pass : false,
      };
    }
  }
})

test('my own matchers', () => {
  expect(2003).between(2000, 2025)
})


// [4]
expect.extend({
  RequridNmae(received, expectedName){
    let pass = (received === expectedName)

    if(pass){
      return {
        message : () => `Hello Mr ${received} And Good Morning`,
        pass : true
      }
    }else {
      return {
        message : () => `You are not own this program`,
        pass: false,
      }
    }
  }
})

it('pla',()=> {
  let name = 'Hassan_Hussien'
  expect(name).RequridNmae('Hassan_Hussien')
})