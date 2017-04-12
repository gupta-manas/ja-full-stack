app.controller('listController', function($scope, BeanService, $location) {
    $scope.createNewBean = function() {
        $location.path('/create-bean')
    };
});