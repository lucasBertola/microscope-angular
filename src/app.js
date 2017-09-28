'use strict';

// Imports
window.jQuery = window.$ = require('jquery');
var angular = require('angular');
require('bootstrap-sass');
require('angular-route');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');

// Injection
var app = angular.module('app', [
	'ngRoute',
	'app.home'
]);

app.config(['$locationProvider','$routeProvider', Router]);
app.run(StartUp);