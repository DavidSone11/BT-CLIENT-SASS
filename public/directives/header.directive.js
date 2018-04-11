var app = angular.module("BTAPP").directive("mainHeader",["$compile", function ($compile) {

    return {
        restrict: 'E',
        templateUrl: '/views/header.tmpl.html',
        replace: true,
        link: function (scope, element, attrs) {


        }
    }
    
}]);