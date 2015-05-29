/**
 * Created by wpguo on 10/24/2014.
 */
'use strict';
angular
    .module('virtualGamingWorld', ['ngRoute', 'ngResource', 'directives', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.tpl.html',
                controller: WelcomeCtrl
            })
            .when('/main', {
                templateUrl: 'views/main.tpl.html',
                controller: MainCtrl
            })
            .otherwise({
                redirectTo: '/'
            });
    });

//angular.element(document).ready(function() {
//    angular.bootstrap(document, ['virtualGamingWorld']);
//});