'use strict';

// Router class
function Router($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');

	$routeProvider.otherwise({ redirectTo: '/' });
}

module.exports = Router;