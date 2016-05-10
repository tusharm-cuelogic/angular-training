'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', 'employeeService', 'localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, employeeService, localStorageServiceWrapper) {
        
        $scope.login = function() { 
            if($scope.email && $scope.password) {
                var getEmployee = employeeService.getEmployeeList().employeeDetails;
                
                var userExists = false;
                angular.forEach(getEmployee, function(value, key) {

                    if (!userExists) {

                        if (value.username === $scope.email && value.password === $scope.password) {
                            userExists = true;

                            var employeeInfo = {
                                            "id": value.id,
                                            "name": value.name,
                                            "department": value.department,
                                            "salary": value.salary,
                                            "image": value.image,
                                            "username": value.username,
                                        };

                            localStorageServiceWrapper.set("employeeinfo", employeeInfo);
                        }  
                    }
                });

                if (userExists) {
                   $state.transitionto('/dashboard');
                } else {
                    alert("Username and Password is incorrect")
                }
                
            } else {
                alert("Please enter username and password")
            }
        }
    }
})();
