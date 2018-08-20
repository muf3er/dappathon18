const routes = require('next-routes')();

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
routes
    .add('/request/new', 'request/new') // this must be first
    .add('/request/:address', '/request/show') // only then this can come
    .add('/request/:address/milestones', '/request/milestone/index') 
    .add('/request/:address/milestones/new', '/request/milestone/new')
    .add('/request/:address/milestones/feedback', '/request/milestone/feedback');



module.exports = routes;