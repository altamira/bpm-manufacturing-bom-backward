'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:ProductListCtrl
 * @description
 * # ProductListCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('ProductListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
