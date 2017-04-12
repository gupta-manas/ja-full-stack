app.controller('CreateModalInstanceController', function($scope, $uibModalInstance, BeanService) {
    $scope.createNewBean = function() {
        var dataToSend = {
            'beanID': $scope.beanID,
            'intNum': $scope.intNum,
            'stringVal': $scope.stringVal,
            'boolVal': $scope.boolVal
        };

        BeanService.createBean(dataToSend);
        $uibModalInstance.close(dataToSend);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
});