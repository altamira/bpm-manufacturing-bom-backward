'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:OrderListCtrl
 * @description
 * # OrderListCtrl
 * Controller of the yoApp
 */

angular.module('yoApp')
  .controller('OrderListCtrl', function($scope, $filter) {
  var scrollItems = [];

  for (var i=1; i<=100; i++) {
    scrollItems.push("Item " + i);
  }

  $scope.scrollItems = scrollItems;
  
  
});