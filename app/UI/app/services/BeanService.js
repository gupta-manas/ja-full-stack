app.service('BeanService', function($http) {
    var successHandler = function() {
        console.log("Operation Success!")
    }
    var faultHandler = function() {
        console.log("Operation failed!")
    }

    this.getBeans = function() {
        var promise = $http.get("http://localhost:8080/beans").then(function(res) {
            return res.data;
        }, faultHandler);
        return promise;
    }
    this.createBean = function(bean) {
        $http.post('http://localhost:8080/beans', bean)
            .then(successHandler, faultHandler)
    }
});