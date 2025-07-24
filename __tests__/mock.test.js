let mocker = require('../mock')

test('mock Exampls', () => {
  const mocker =jest.fn((name) => `Hello ${name}`)
  expect(mocker('Hassan')).toBe("Hello Hassan");
  expect(mocker('Ahmed')).toBe("Hello Ahmed");
  expect(mocker('Sara')).toBe("Hello Sara");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith('Hassan');
  expect(mocker).toHaveBeenLastCalledWith("Sara");
})


test('another Ex', ()=> {
  const mock = jest.fn(() => true);
  mock();
  expect(mock).toHaveReturned();
})


