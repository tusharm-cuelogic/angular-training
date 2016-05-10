'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$state', '$scope', '$stateParams', 'employeeService', userController]);

    function userController($state, $scope, $stateParams, employeeService) {
        $scope.setTitle = 'Add user';
        
        userId = parseInt($stateParams.id)

        if (!isNaN(userId) && typeof(userId) == "number") {
        	
        	$scope.getEmployeeInfo = employeeService.getEmployeeList().employeeDetails[userId - 1];

            var getEmployeeInfo = {
                "id": 1,
                "firstname": "Prasanna",
                "lastname" : "Champ",
                "gender" : "male",
                "department": "Account",
                "salary": 12000,
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381",
                "username": "prasanna@yopmail.com",
                "password": "12345"
            }

            setEmployeeInfo = employeeService.setEmployeeList(userId, getEmployeeInfo);

            $state.transitionTo('base.dashboard');

        } else {
            
            var getEmployeeInfo = {
                "id": 10,
                "firstname": "Aju",
                "lastname" : "John",
                "gender" : "male",
                "department": "Developer",
                "salary": 21000,
                "image": "resource/images/ipgeo.png",
                "username": "ganesh@yopmail.com",
                "password": "12345"
            }
            setEmployeeInfo = employeeService.setEmployeeList(0, getEmployeeInfo);

            //$state.transitionTo('base.dashboard');
        }

        
    }

})();
