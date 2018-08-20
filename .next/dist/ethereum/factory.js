'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ContractFactory = require('./build/ContractFactory.json');

var _ContractFactory2 = _interopRequireDefault(_ContractFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * setup campaignFactorty contract:
 * this file creates a new CampaignFactory contract and exports the
 * instance so it can be used elsewhere in in the project.
 * 
 * note:
 * -address in the instance must always be the newest!
 * -update it whenever campaignFactory gets redeployed
 */
var instance = new _web2.default.eth.Contract(JSON.parse(_ContractFactory2.default.interface), '0x485c2A74C4651Ed0c0fC4f05012e71A063728A83');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDaGFyaXR5RmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7QUFWM0I7Ozs7Ozs7OztBQVlBLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsS0FBQSxBQUFLLE1BQU0sMEJBREUsQUFDYixBQUEwQixZQUQ5QixBQUFpQixBQUViLEFBR0o7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJEOi9IYWNrYXRob25zL2RhcHBhdGhvbjE4L2RhcHBhdGhvbjE4In0=