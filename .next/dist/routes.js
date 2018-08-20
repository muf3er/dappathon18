'use strict';

var routes = require('next-routes')();

/**
 * routes.js
 * -handles all the pages that requires dynamic routing
 * -other pages next handles by default
 * -after colon comes 'wildcard' (dynamic) part
 * 
 * -add() method:
 *      -defines new route mapping
 *      -first argument is the pattern we want to look for in the URL
 *      -second argument indicates what component we want to show from the pages directory
 *          -new route for /charities/new must be added 'address' mapping because now it thinks 'new' is an address
 *      
 */
routes.add('/request/new', 'request/new') // this must be first
.add('/request/:address', '/request/show') // only then this can come
.add('/request/:address/milestones', '/request/milestone/index').add('/request/:address/milestones/new', '/request/milestone/new').add('/request/:address/milestones/feedback', '/request/milestone/feedback');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBLE9BQ0ssQUFETCxJQUNTLEFBRFQsZ0JBQ3lCLEFBRHpCLGVBQ3dDLEFBRHhDO0NBRUssQUFGTCxJQUVTLEFBRlQscUJBRThCLEFBRjlCLGlCQUUrQyxBQUYvQztDQUdLLEFBSEwsSUFHUyxBQUhULGdDQUd5QyxBQUh6Qyw0QkFJSyxBQUpMLElBSVMsQUFKVCxvQ0FJNkMsQUFKN0MsMEJBS0ssQUFMTCxJQUtTLEFBTFQseUNBS2tELEFBTGxEOztBQVNBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovSGFja2F0aG9ucy9kYXBwYXRob24xOC9kYXBwYXRob24xOCJ9