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

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Hackathons\\dappathon18\\dappathon18\\pages\\index.js?entry";


var CharityIndex = function (_Component) {
  (0, _inherits3.default)(CharityIndex, _Component);

  function CharityIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CharityIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CharityIndex.__proto__ || (0, _getPrototypeOf2.default)(CharityIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      names: []
    }, _this.getRandom = function () {
      return Math.floor(Math.random() * 5);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CharityIndex, [{
    key: "renderCharities",

    /*
    async getNames() {
      const names = this.props.charities.map(address => {
        const charity = Charity(address);
        const name = charity.methods.name().call();
        return name;
      });
       this.setState({ names });
       return names;
    }
    */

    /**
     * renderCharities()
     * -iterate the list of campaign addresses
     * -for each address create an object (card)
     * -map() = pass in a function. that function will be called on each element in the list
     * -sign the array of objects(cards) to items variable
     * -finally return Card.Group-object and assign items-object to its items-property
     * -description field: wrap anchor tag with link tag and set property route
     *    -to dynamically compute the route use ES6 template string (route={`/campaigns/${address}`})
     *
     */
    value: function renderCharities() {
      var _this2 = this;

      var items = this.props.charities.map(function (address) {
        return {
          raised: true,
          centered: false,
          header: address,
          meta: "Requester's Address",
          description: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, style: { marginTop: "10px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }, _react2.default.createElement("div", { style: { display: "inline" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, _react2.default.createElement("p", { style: { color: "green" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }, _this2.getRandom()), "/", _react2.default.createElement("p", { style: { color: "red" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }, _this2.getRandom()))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { fluid: true, basic: true, color: "blue", __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }, _react2.default.createElement(_routes.Link, { route: "/request/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, "Details"))))))),
          fluid: false,
          style: { overflowWrap: "break-word" }
        };
      });

      items.reverse();

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      });
    }

    /**
     * render()
     * -we must use <Layout>, because it displays the header, styling, etc on the screen
     */

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "All Requests"), _react2.default.createElement(_routes.Link, { route: "/request/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        floated: "right",
        content: "Create Request",
        icon: "add"
        //color="teal"
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))), this.renderCharities()));
    }
  }], [{
    key: "getInitialProps",

    /**
     * getInitialProps() is a lifecycle method with Next.js so that dataloading(fetching) can happen on the server
     * when next.js does serverside redering, this method is ececuted before anything else
     */
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var charities;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedContracts().call();

              case 2:
                charities = _context.sent;
                return _context.abrupt("return", { charities: charities });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CharityIndex;
}(_react.Component);

exports.default = CharityIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJDaGFyaXR5SW5kZXgiLCJzdGF0ZSIsIm5hbWVzIiwiZ2V0UmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXRlbXMiLCJwcm9wcyIsImNoYXJpdGllcyIsIm1hcCIsInJhaXNlZCIsImNlbnRlcmVkIiwiaGVhZGVyIiwiYWRkcmVzcyIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJjb2xvciIsImZsdWlkIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZXZlcnNlIiwicmVuZGVyQ2hhcml0aWVzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ29udHJhY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozt3TkFDSixBO2FBQVEsQSxBQUNDO0FBREQsQUFDTixhQXNCRixBLFlBQVksWUFBTSxBQUNoQjthQUFPLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUF2QixBQUFPLEFBQTJCLEFBQ25DO0E7Ozs7U0FFRDs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBV2tCO21CQUNoQjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7a0JBQU8sQUFDRyxBQUNSO29CQUZLLEFBRUssQUFDVjtrQkFISyxBQUdHLEFBQ1I7Z0JBSkssQUFJQyxBQUNOO3VDQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsQUFBQyx1Q0FBSyxTQUFOLEFBQWUsR0FBRyxPQUFPLEVBQUUsV0FBM0IsQUFBeUIsQUFBYTt3QkFBdEM7MEJBQUEsQUFDRTtBQURGOzZCQUNHLGNBQUQsc0JBQUEsQUFBTTs7d0JBQU47MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0csY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQWIsQUFBWSxBQUFTO3dCQUFyQjswQkFBQSxBQUVBO0FBRkE7NkJBRUEsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBUTt3QkFBbEI7MEJBQUEsQUFBNkI7QUFBN0I7b0JBRkEsQUFFQSxBQUE2QixBQUFLLGNBQ2xDLHFCQUFBLGNBQUEsT0FBRyxPQUFPLEVBQUMsT0FBWCxBQUFVLEFBQVE7d0JBQWxCOzBCQUFBLEFBQTJCO0FBQTNCO29CQUxKLEFBQ0UsQUFDRSxBQUdBLEFBQTJCLEFBQUssQUFJbEMsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNOzt3QkFBTjswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLE1BQW9CLE9BQXBCLEFBQTBCO3dCQUExQjswQkFBQSxBQUNFO0FBREY7NkJBQ0UsQUFBQyw4QkFBSyxxQkFBTixBQUF5Qjt3QkFBekI7MEJBQUEsQUFDRTtBQURGOzZCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQXBCVCxBQU1ILEFBQ0UsQUFDRSxBQVNFLEFBQ0UsQUFDRSxBQUNFLEFBUWQ7aUJBNUJLLEFBNEJFLEFBQ1A7aUJBQU8sRUFBRSxjQTdCWCxBQUFPLEFBNkJFLEFBQWdCLEFBRTFCO0FBL0JRLEFBQ0w7QUFGSixBQUFjLEFBa0NkLE9BbENjOztZQWtDZCxBQUFNLEFBRU47OzJDQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QUFHVDs7Ozs7Ozs7OzZCQUlTLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFFRTtpQkFGRixBQUVVLEFBQ1I7aUJBSEYsQUFHVSxBQUNSO2NBQUssQUFDTDtBQUxGO0FBQ0U7b0JBREY7c0JBSk4sQUFFRSxBQUNFLEFBQ0UsQUFTSDtBQVRHO2lCQU5WLEFBQ0UsQUFDRSxBQWFHLEFBQUssQUFJYjs7O1NBbEhEOzs7Ozs7Ozs7Ozs7Ozt1QkFLMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtpREFZQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXJCZ0IsQSxBQXlIM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovSGFja2F0aG9ucy9kYXBwYXRob24xOC9kYXBwYXRob24xOCJ9