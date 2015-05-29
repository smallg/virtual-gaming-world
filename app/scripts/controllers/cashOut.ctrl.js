/**
 * Created by wpguo on 10/23/2014.
 */
var CashOutCtrl = ['$scope','$modalInstance', function ($scope,$modalInstance) {
    //package slots
    $scope.slots=[
        {name:'slot1',image:'slot1'},
        {name:'slot2',image:'slot2'},
        {name:'slot3',image:'slot3'},
        {name:'slot4',image:'slot4'},
        {name:'slot5',image:'slot5'},
        {name:'slot6',image:'slot6'},
        {name:'slot1',image:'slot1'},
        {name:'slot2',image:'slot2'},
        {name:'slot3',image:'slot3'},
        {name:'slot4',image:'slot4'},
        {name:'slot5',image:'slot5'},
        {name:'slot6',image:'slot6'}
    ];

    $scope.cancel = function () {
        try {
            $modalInstance.dismiss('cancel');
        } catch (e) {
            //TODO
        }
    };

    $scope.ok = function () {
        //save some data
    };
}];