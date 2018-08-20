"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Hackathons\\dappathon18\\dappathon18\\components\\Layout.js";

/**
 * Layout.js component
 * -all of the page's content that calls layout, will be passed to Layout in props.chidren
 * -{props.chidren} will show that content of the screen
 * -<Container> limits content to a maximum width
 * 
 * Head:
 * -import helper component from Next library called Head
 * -everything wrapped between head tags will be moved to the head tag of the html document
 * -link tag is stored here because it is a location that will always be loaded (Layout.js is part of all pages is this app)
 */

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUVuQixBQVlBOzs7Ozs7Ozs7Ozs7a0JBQWUsaUJBQVMsQUFDdEI7eUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQUZKLEFBQ0UsQUFDRSxBQUtGO0FBTEU7QUFDRSx1QkFJSixBQUFDOztnQkFBRDtrQkFQRixBQU9FLEFBQ0M7QUFERDtBQUFBLFlBUkosQUFDRSxBQVFTLEFBR1o7QUFiRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRDovSGFja2F0aG9ucy9kYXBwYXRob24xOC9kYXBwYXRob24xOCJ9