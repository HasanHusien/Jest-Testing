"use strict";

var mocker = require('../mock');

test('mock Exampls', function () {
  var mocker = jest.fn(function (name) {
    return "Hello ".concat(name);
  });
  expect(mocker('Hassan')).toBe("Hello Hassan");
  expect(mocker('Ahmed')).toBe("Hello Ahmed");
  expect(mocker('Sara')).toBe("Hello Sara");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith('Hassan');
  expect(mocker).toHaveBeenLastCalledWith("Sara");
});
test('another Ex', function () {
  var mock = jest.fn(function () {
    return true;
  });
  mock();
  expect(mock).toHaveReturned();
});