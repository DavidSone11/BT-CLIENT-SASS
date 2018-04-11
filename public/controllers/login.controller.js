var app = angular.module("BTAPP").controller("loginCTRL", function ($scope,$state) {

    $scope.login = function(username,password){
      console.log(username);
      console.log(password);
      $state.go("home.dashboard");
    }
    


});