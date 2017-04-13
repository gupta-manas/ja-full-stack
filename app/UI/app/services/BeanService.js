app.service('BeanService', function($http) {

    var tableData = [];

    this.res = {
        tableData: tableData
    }

    var successHandler = function() {
        console.log("Operation Success!")
    }
    var faultHandler = function() {
        console.log("Operation failed!")
    }

    this.getBeans = function() {
        var promise = $http.get("http://localhost:8080/beans").then(function(res) {
            tableData = res.data;
            return res.data;
        }, faultHandler);
        return promise;
    }
    this.createBean = function(bean) {
        $http.post('http://localhost:8080/beans', bean)
            .then(function(res) {
                tableData.push(res.data)
            }, faultHandler);
    }

    this.deleteBean = function(beanID, rowIndex) {
        $http.delete('http://localhost:8080/beans/' + beanID)
            .then(function() {
                console.log("Bean with beanID " + beanID + " deleted successfully.");
                tableData.splice(rowIndex, 1);
            }, faultHandler);
    }
});