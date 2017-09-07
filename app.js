(function () {
 'use strict';

angular.module('LunchCheck', [])
 .controller('LunchCheckController', function ($scope) {
 $scope.menu = "";//get the list of items from the textbox
 
 $scope.counter = function () {
 if($scope.menu ==" ") {
   $scope.displayMessage = "Please enter data first"; 
    }
   // var totalNameValue = calculatNumericForString($scope.name);
    //$scope.totalValue = totalNameValue;
//	$scope.displayMessage = $scope.menu;
	};
  
 });
 })();
 
 
 // (function () {
// 'use strict';

// angular.module('LunchCheck', [])
// .controller('LunchCheckController', function ($scope) {

// LunchCheckController.$inject = ['$scope'];
  // $scope.menu = "";//get the list of items from the textbox
  // $scope.totalValue = 0;
  // console.log($scope.menu);
   // if($scope.menu ==" ") {
   // $scope.displayMessage = "Please enter data first"; 
   // }
   
  // $scope.counter = function () {
    // var msg = splitString($scope.menu,comma);
   
   // $scope.displayStatus = msg; 
     
   // function splitString(stringToSplit, separator) {
  // var arrayOfStrings = stringToSplit.split(separator);
  // if(arrayOfStrings.length <=3) {
  // var message = "Enjoy!!";
  // }
  // else {
  // var message = "Too much!";
  // }
  
// }
// return message;
  // };
  
 // );
 
// })();