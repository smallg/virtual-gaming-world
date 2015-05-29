/**
 * Created by wpguo on 10/23/2014.
 */
var WelcomeCtrl=['$scope','$location', function($scope, $location){
    $scope.goNewView=function(url){
        $location.url(url);
    };
}];