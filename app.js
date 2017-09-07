(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.menu = "";//get the list of items from the textbox
  $scope.totalValue = 0;
   if($scope.menu ==" ") {
   $scope.displayStatus = "Please enter data first"; 
   }
   
  $scope.counter = function () {
    var cnt = splitString($scope.menu,comma);
    $scope.totalValue = cnt;
		if(cnt <=3) {
   $scope.displayStatus = "Enjoy!!"; 
   }
   else {
   $scope.displayStatus = "Too much!"; 
   }
   
  };
  
 function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
}
return arrayOfStrings.length;
})();
