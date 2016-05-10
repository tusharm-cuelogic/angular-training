(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'employeeService', dashboardController]);

    function dashboardController($scope, $state, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';

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
        }
    }

})();
