app.controller('mainController', function($scope, $uibModal, BeanService) {
    /*$scope.demoBeans = [
        { beanID: 1, intNum: 12, stringVal: 'str1', boolVal: true },
        { beanID: 2, intNum: 22, stringVal: 'str2', boolVal: true },
        { beanID: 3, intNum: 41, stringVal: 'str3', boolVal: false },
        { beanID: 4, intNum: 35, stringVal: 'str4', boolVal: false },
        { beanID: 5, intNum: 96, stringVal: 'str5', boolVal: true }
    ];*/

    $scope.demoBeans = [];
    BeanService.getBeans().then(function(data) {
        $scope.demoBeans = data;
    });

    $scope.open = function(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../templates/createBean.html',
            controller: 'CreateModalInstanceController',
            size: size
        });

        modalInstance.result.then(function(data) {
            console.log("Modal Submit clicked!");
        }, function() {
            console.log("Modal canceled at " + new Date())
        })
    }

});