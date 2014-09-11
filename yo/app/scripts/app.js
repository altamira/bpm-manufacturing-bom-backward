'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
var yoApp = angular.module('yoApp', [
    'ngAnimate',
	'ngTable',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mobile-angular-ui',
    'restangular'
  ]);
yoApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	  .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrderListCtrl'
      })
	   .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
