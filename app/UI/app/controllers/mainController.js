app.controller('mainController', function($scope, $uibModal, BeanService) {

    $scope.demoBeans = BeanService.res.tableData;
    /*BeanService.getBeans().then(function(data) {
        $scope.demoBeans = data;
    });*/

    $scope.open = function(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../templates/createBean.html',
            controller: 'CreateModalInstanceController',
            size: size
        });

        modalInstance.result.then(function(data) {
            console.log("Modal Submit clicked!");
            //$scope.demoBeans.push(data);
        }, function() {
            console.log("Modal canceled at " + new Date())
        })
    };

    $scope.deleteBean = function(beanID, rowIndex) {
        BeanService.deleteBean(beanID, rowIndex);
    };

});