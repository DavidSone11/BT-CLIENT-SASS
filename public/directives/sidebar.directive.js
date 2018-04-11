var app = angular.module("BTAPP").directive("sidebar", ["$compile", function ($compile) {

    return {
        restrict: 'E',
        templateUrl: '/views/sidebar.tmpl.html',
        replace: true,
        link: function (scope, element, attrs) {


        }
    }

}]);


