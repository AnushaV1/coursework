(function () {
 'use strict';

angular.module('LunchCheck', [])
 .controller('LunchCheckController', function ($scope) {
 $scope.menu = "";//get the list of items from the textbox
 
 $scope.counter = function () {
   // var totalNameValue = calculatNumericForString($scope.name);
    //$scope.totalValue = totalNameValue;
	$scope.displayMessage = $scope.menu;
	};
  
 });
 })();