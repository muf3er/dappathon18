'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /**
                    * this file sets up web3 instance. this file gets executed on the server and on the browser.
                    * if statement checks whether the user is using metamask and to prevent window is not defined error.
                    */


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are executing the file inside the browser and metamask is available
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server *OR* we are on the browser and the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/852f295b9d304f699c297fec53c7b1df');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQU5BOzs7Ozs7QUFRQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUNyRTtBQUNBO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUhELE9BR08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2IsQUFFSjtXQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ25CO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi9IYWNrYXRob25zL2RhcHBhdGhvbjE4L2RhcHBhdGhvbjE4In0=