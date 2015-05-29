/**
 * Created by wpguo on 10/23/2014.
 */
'use strict';
angular.module('virtualGamingWorld').controller("RootCtrl", function ($scope, $location) {
    $scope.showMainHeader = false;
    $scope.$on("showMainHeader", function (event, userDetails) {
        $scope.displayName = userDetails.displayName;
        $scope.showMainHeader = true;
    });

    $scope.$watch(function () {
        return $location.$$url;
    }, function (val) {
        if (val === "/") {
            $scope.showMainHeader = false;
        } else {
            $scope.showMainHeader = true;
        }
    });

    $scope.defaultTopMenu = "first";

    $scope.setActiveTopMenu=function(name){
        $scope.defaultTopMenu=name;
        //TODO
        //get slots data
    };

    $scope.getActiveClass = function (path) {
        if (path === $scope.defaultTopMenu) {
            return "active";
        } else {
            return "";
        }
    };
});