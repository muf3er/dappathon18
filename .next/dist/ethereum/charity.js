"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _MainContract = require("./build/MainContract.json");

var _MainContract2 = _interopRequireDefault(_MainContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * charity.js:
 * Contains a function that takes an address as an argument and returns new charity contract.
 * It is used to create instances of charity with an address.
 */

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_MainContract2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjaGFyaXR5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDaGFyaXR5IiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUVBLEFBTUE7Ozs7OztrQkFBZSxtQkFBVyxBQUN4QjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyx1QkFBUSxBQUFuQixBQUF0QixZQUFxRCxBQUFyRCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJjaGFyaXR5LmpzIiwic291cmNlUm9vdCI6IkQ6L0hhY2thdGhvbnMvZGFwcGF0aG9uMTgvZGFwcGF0aG9uMTgifQ==