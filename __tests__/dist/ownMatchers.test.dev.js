
var arr = require('../ownMatchers'); // [1]


expect.extend({
  biggerThan: function biggerThan(recived, target) {
    var pass = recived > target;

    if (pass) {
      return {
        message: function message() {
          return "Expectes ".concat(recived, " larger than ").concat(target);
        },
        pass: true
      };
    } else {
      return {
        message: function message() {
          return "Error Expectes ".concat(recived, " larger than ").concat(target);
        },
        pass: false
      };
    }
  }
}); // [12]

expect.extend({
  smallerThan: function smallerThan(recived, target) {
    var pass = recived < target;

    if (pass) {
      return {
        message: function message() {
          return "Expectes ".concat(recived, " larger than ").concat(target);
        },
        pass: true
      };
    } else {
      return {
        message: function message() {
          return "Error Expectes ".concat(recived, " larger than ").concat(target);
        },
        pass: false
      };
    }
  }
});
test('my match', function () {
  expect(10).biggerThan(5);
});
test('pla', function () {
  expect(arr[0]).smallerThan(arr[2]);
}); // [3]

expect.extend({
  between: function between(received, start, end) {
    var pass = received > start && received < end;

    if (pass) {
      return {
        message: function message() {
          return "Recevid ".concat(received, " and Bigger then ").concat(start, " and smaller than ").concat(end);
        },
        pass: true
      };
    } else {
      return {
        message: function message() {
          return "Recevid ".concat(received, " and Bigger then ").concat(start, " and smaller than ").concat(end);
        },
        pass: false
      };
    }
  }
});
test('my own matchers', function () {
  expect(2003).between(2000, 2025);
}); // [4]

expect.extend({
  RequridNmae: function RequridNmae(received, expectedName) {
    var pass = received === expectedName;

    if (pass) {
      return {
        message: function message() {
          return "Hello Mr ".concat(received, " And Good Morning");
        },
        pass: true
      };
    } else {
      return {
        message: function message() {
          return "You are not own this program";
        },
        pass: false
      };
    }
  }
});
it('pla', function () {
  var name = 'Hassan_Hussien';
  expect(name).RequridNmae('Hassan_Hussien');
});