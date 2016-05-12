'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$state', '$scope', '$stateParams', 'employeeService', '$timeout', userController]);

    function userController($state, $scope, $stateParams, employeeService, $timeout) {
        
        userId = parseInt($stateParams.id);

        $scope.buttonText = "Submit";
        $scope.isDisabled = false;

        $scope.is_edit = (!isNaN(userId) && typeof(userId) == "number" && userId > 0) ? true : false;
        $scope.setTitle = ($scope.is_edit) ? 'Edit user' : 'Add User';

        $scope.getEmployeeInfo = ($scope.is_edit) ? employeeService.getEmployee(userId) : null;

        $scope.copyData = angular.copy($scope.getEmployeeInfo);
        $scope.userInfo = function() {
            
            var userInfo =  {
                'firstname': $scope.getEmployeeInfo.firstname,
                'lastname': $scope.getEmployeeInfo.lastname,
                'username': $scope.getEmployeeInfo.username,
                'department': $scope.getEmployeeInfo.department,
                'gender': $scope.getEmployeeInfo.gender,
                'salary': $scope.getEmployeeInfo.salary,
            };

            
            $timeout(function() {
                userInfo['id'] = parseInt(employeeService.getEmployeeList().employeeDetails.length) + 1;
                if($scope.is_edit) {
                    employeeService.updateEmployeeList(userId, userInfo);
                } else {
                    $scope.updateUser = employeeService.setEmployeeList(userInfo);
                }
                $state.transitionTo('base.dashboard');
            }, 3000);
            
        };

        $scope.cancelAction = function() {
             if ($scope.is_edit){
                $scope.getEmployeeInfo = angular.copy($scope.copyData);
            } else {
                $state.transitionTo('base.dashboard');
            }
        };
    }

})();
