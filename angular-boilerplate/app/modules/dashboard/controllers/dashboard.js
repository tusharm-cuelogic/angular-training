(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'employeeService', '$window', dashboardController]);

    function dashboardController($scope, $state, employeeService, $window) {
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

        $scope.deleteUser = function(userId) {
           
            if ($window.confirm("Are you sure you want to delete this?"))
                $scope.result = "Yes";
            else
                $scope.result = "No";
            
            if ($scope.result == "Yes") {
                employeeService.deleteEmployee(userId);
                $state.transitionTo('base.dashboard');
            }
        };
    }

})();
