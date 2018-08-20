"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Hackathons\\dappathon18\\dappathon18\\components\\Header.js";

/**
 * Header.js
 * -<Menu> is the header
 * -<Menu.Menu> with property position=right is right side of the header
 * -<Menu style={{ marginTop: "10px" }}>. Can pass in styling e.g. marging
 * -<Menu.Item> is replaced with <Link> tag
 *    -set route property that indicates where user is taken if link is pressed
 *    -link tag wraps its children with clickevent handler
 *    -set property className="item", it restores semantic-ui styling and makes anchor tag look nicer
 */

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "The DAppathon")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Requests")), _react2.default.createElement(_routes.Link, { route: "/charities/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: "plus", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJJY29uIiwiTGluayIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTTs7QUFDZixBQUFTLEFBQVk7Ozs7OztBQUVyQixBQVdBOzs7Ozs7Ozs7OztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsaURBQUEsQUFBQyxzQkFBRCxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBTEYsQUFLRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQVBKLEFBTUUsQUFDRSxBQUVGLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFaUixBQUNFLEFBU0UsQUFDRSxBQUNFLEFBS1Q7QUFMUzs7QUFiViIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiRDovSGFja2F0aG9ucy9kYXBwYXRob24xOC9kYXBwYXRob24xOCJ9