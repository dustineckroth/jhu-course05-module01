(function () {
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.stringToCheck = "";

  $scope.CheckIfTooMuch = function () {
    var stringToCheck = $scope.stringToCheck.trim();

    if (stringToCheck.length == 0) {
      $scope.message = "Please enter data first!";
    } else {
      var count = stringToCheck.split(",").length;

      if (count > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    }
  };
}

})();
