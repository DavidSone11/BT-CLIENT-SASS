
var app = angular.module("BTAPP", [
    'ui.router',
    'oc.lazyLoad',
]);




app.config(["$stateProvider", "$urlRouterProvider", "$ocLazyLoadProvider", function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $urlRouterProvider.otherwise('/login')

    // $urlRouterProvider.otherwise(function($injector, $location){
    //     var loginUrl=$location.absUrl() + '#/login';
    //     $injector.invoke(function($window, $timeout) { 
    //       $timeout(function() {
    //         $window.location.href=loginUrl;
    //       },5000);
    //     });
    //     return true;
    // });

    $stateProvider.state('login', {
        templateUrl: 'views/login.tmpl.html',
        url: '/login',
        controller: 'loginCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BTAPP',
                    files: [
                        'controllers/login.controller.js',


                    ]
                });
            }
        }
    }).state('home', {
        templateUrl: 'views/home.tmpl.html',
        url: '/home',
        controller: 'homeCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BTAPP',
                    files: [

                        'controllers/home.controller.js',

                    ]
                });
            }
        }
    }).state('home.dashboard', {
        templateUrl: 'views/dashboard.tmpl.html',
        url: '/dashboard',
        controller: 'dashboardCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BTAPP',
                    files: [

                        'controllers/dashboard.controller.js',
                        'directives/header.directive.js',
                        'directives/sidebar.directive.js',

                    ]
                });
            }
        }
    }).state("home.user", {
        templateUrl: 'views/User.tmpl.html',
        url: '/user',
        controller: 'userCTRL',
        resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'BTAPP',
                    files: [
                        'controllers/user.controller.js',
                    ]
                });
            }
        }
    });


}]);