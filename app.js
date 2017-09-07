(function () {
 'use strict';

angular.module('LunchCheck', [])
 .controller('LunchCheckController',LunchCheckController);
 
 LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
     //   $scope.count = 0;
	 //  $scope.stateOfBeing = "fed";
	 
    $scope.countMessage() = function () {
       var mesg = calculateItems($scope.menu);
	   $scope.displayMessage = mesg;
  };
    
	function calculateItems($scope.menu) {
	var msg = "null";
	
	return msg;
	}
   
    
   
    //$scope.totalValue = totalNameValue;
	
	
	
	
  }
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