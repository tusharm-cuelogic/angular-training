(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$location', '$scope', '$state', 'employeeService', '$window', dashboardController]);

    function dashboardController($location, $scope, $state, employeeService, $window) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';

        $scope.sortType = 'name';
        $scope.sortReverse = false

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = employeeService.getEmployeeList().employeeDetails;
            
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        };

        // $scope.showPopUp = function(userId) {

        // }

        $scope.deleteUser = function(userId) {
           
            // if ($window.confirm("Are you sure you want to delete this?"))
            //     $scope.result = "Yes";
            // else
            //     $scope.result = "No";
            // return false;
            // if ($scope.result == "Yes") {
            //     employeeService.deleteEmployee(userId);
            //     $state.transitionTo('base.dashboard');
            // }

            employeeService.deleteEmployee(userId);
            
            $scope.$apply();
        };

        $scope.editUser = function(userId) {
            $state.transitionTo('base.edit', {id: userId});
        };
    }

})();
