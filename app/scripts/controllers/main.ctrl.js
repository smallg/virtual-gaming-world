/**
 * Created by wpguo on 10/23/2014.
 */
var MainCtrl = ['$scope', '$rootScope', '$location', '$modal', function ($scope, $rootScope, $location, $modal) {
    $scope.userDetails = {
        displayName: "Emmett Brown"
    };
    if ($location.$$url == "/main") {
        $scope.$emit("showMainHeader", $scope.userDetails);
    }

    $scope.openCashOutModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/cashOut.tpl.html',
            controller: CashOutCtrl,
            windowClass: 'cash_out'
        });
    };
}];