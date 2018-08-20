"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _charity = require("../../ethereum/charity");

var _charity2 = _interopRequireDefault(_charity);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Hackathons\\dappathon18\\dappathon18\\pages\\request\\new.js?entry";


/**
 * CharityNew:
 * -this class will take users input and create new campaign
 * -has a variable onSubmit that equals arrow function so 'this' works accordingly
 */

var ContractNew = function (_Component) {
  (0, _inherits3.default)(ContractNew, _Component);

  function ContractNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContractNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContractNew.__proto__ || (0, _getPrototypeOf2.default)(ContractNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      loading: false,
      taskName: "",
      location: "",
      telephone: "",
      dateRange: "",
      requestExpiry: "",
      taskDuration: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: "" });

                /*try {
                  if (this.state.minimumContribution === '') throw 'field is empty';
                  if (this.state.minimumContribution <= 0) throw 'field is less than equal to zero';
                  if (isNaN(Number(this.state.minimumContribution))) throw "field is not a number";
                  if (this.state.minimumContribution % 1 != 0) throw 'field is a decimal number';
                } catch (error) {
                  this.setState({ loading: false, errorMessage: 'Invalid minimum contribution (' + error + ')', minimumContribution: '' })
                  return;
                }*/

                console.log(_this.state.taskName);
                console.log(_this.state.location);
                console.log(_this.state.telephone);
                console.log(_this.state.dateRange);
                console.log(_this.state.requestExpiry);
                console.log(_this.state.taskDuration);

                _context.prev = 8;

                console.log("yes");
                _context.next = 12;
                return _web2.default.eth.getAccounts();

              case 12:
                accounts = _context.sent;

                console.log("accounts", accounts);
                _context.next = 16;
                return _factory2.default.methods.createContract(_this.state.taskName, _this.state.location, _this.state.telephone, _this.state.dateRange, _this.state.requestExpiry, _this.state.taskDuration).send({
                  from: accounts[0]
                });

              case 16:
                console.log('contract made');

                console.log("a");

                _routes.Router.pushRoute("/");
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](8);

                /*if(error.message.includes('Returned error: Error: MetaMask Tx Signature: User denied')) {
                  this.setState({ errorMessage: 'Transaction rejected by user' })
                } else if (error.message.includes('No "from" address')) {
                  this.setState({ errorMessage: 'MetaMask log in is required to create new charity' })
                } else {
                  this.setState({ errorMessage: err.message }); // for production change errorMessage to: 'something went wrong!
                }*/
                console.log(_context.t0);

              case 24:

                _this.setState({ loading: false, taskName: '', location: '', telephone: '', dateRange: '', requestExpiry: '', taskDuration: '' });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[8, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  /**
   * -onSubmit:
   *    -function handles the form submission
   *    -must be async because calling factory methods are asyncronous
   *    -preventDefault() prevents the browser to send the form to backend server (default functionality)
   * -web3 gets the account that willl send the transaction
   * -factory will deploy new instance of smart contract with parameter that comes from this.state.minumumContribion
   *    -remenber to specify what account sends the transaction (from field in send())
   * -spinner and error message:
   *    -are handled through state
   *    -error handling in the try catch block: update state (errorMessage) with the error.message if the block throws an error
   *    -when user clicks button: set loading true and remove any error messages
   *    -when try catch block finishes: set loading false
   * -Router:
   *    -pushRoute(/) takes user to page in paranthesis
   */

  (0, _createClass3.default)(ContractNew, [{
    key: "render",

    /**
     * -form:
     *    -the form watches event handler onSubmit and executes this.onSubmit when it happens
     * -error:
     *    -import Message from semantic-ui
     *    -set proporties error, header, content to it
     *    -set error property to Form (expects boolean value (!!this.state.errorMessage))
     *
     */

    value: function render() {
      var _this3 = this;

      console.log(this.state.dateRange);

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Create New Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Description of the Request"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "text",
        value: this.state.taskName, onChange: function onChange(event) {
          return _this3.setState({ taskName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Location"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.location, onChange: function onChange(event) {
          return _this3.setState({ location: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Contact Information"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.telephone, onChange: function onChange(event) {
          return _this3.setState({ telephone: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Preferred Time and Day in a Week"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.dateRange, onChange: function onChange(event) {
          return _this3.setState({ dateRange: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Time limit for Request"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.requestExpiry, onChange: function onChange(event) {
          return _this3.setState({ requestExpiry: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Time limit to Complete Task"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.taskDuration, onChange: function onChange(event) {
          return _this3.setState({ taskDuration: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Create!")));
    }
  }]);

  return ContractNew;
}(_react.Component);

exports.default = ContractNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZXF1ZXN0XFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsImNvbnRyYWN0Iiwid2ViMyIsIlJvdXRlciIsIkNvbnRyYWN0TmV3Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwidGFza05hbWUiLCJsb2NhdGlvbiIsInRlbGVwaG9uZSIsImRhdGVSYW5nZSIsInJlcXVlc3RFeHBpcnkiLCJ0YXNrRHVyYXRpb24iLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNvbnRyYWN0Iiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUdyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCOzs7Ozs7SUFNTSxBOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0osQTtvQkFBUSxBQUNRLEFBQ2Q7ZUFGTSxBQUVHLEFBQ1Q7Z0JBSE0sQUFHSyxBQUNYO2dCQUpNLEFBSUssQUFDWDtpQkFMTSxBQUtNLEFBQ1o7aUJBTk0sQUFNTSxBQUNaO3FCQVBNLEFBT1UsQUFDaEI7b0JBUk0sQUFRUyxBO0FBUlQsQUFDTixhLEFBMEJGOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxT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QUssU0FBUyxFQUFDLFVBQVUsTUFBQSxBQUFNLE9BQXhDLEFBQVMsQUFBYyxBQUF3QjtBQUR2Rjs7b0JBQUE7c0JBZEosQUFZRSxBQUVFLEFBSUY7QUFKRTtBQUNFLDJCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixXQUFXLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLE1BQUEsQUFBTSxPQUF6QyxBQUFTLEFBQWMsQUFBeUI7QUFEekY7O29CQUFBO3NCQXBCSixBQWtCRSxBQUVFLEFBSUY7QUFKRTtBQUNFLDJCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHFEQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixXQUFXLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLE1BQUEsQUFBTSxPQUF6QyxBQUFTLEFBQWMsQUFBeUI7QUFEekY7O29CQUFBO3NCQTFCSixBQXdCRSxBQUVFLEFBSUY7QUFKRTtBQUNFLDJCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixlQUFlLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxlQUFlLE1BQUEsQUFBTSxPQUE3QyxBQUFTLEFBQWMsQUFBNkI7QUFEakc7O29CQUFBO3NCQWhDSixBQThCRSxBQUVFLEFBSUY7QUFKRTtBQUNFLDJCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGdEQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixjQUFjLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFEL0Y7O29CQUFBO3NCQXRDSixBQW9DRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBaEROLEFBR0UsQUFFRSxBQTJDRSxBQU1QOzs7OztBQWpKdUIsQSxBQW9KMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L0hhY2thdGhvbnMvZGFwcGF0aG9uMTgvZGFwcGF0aG9uMTgifQ==