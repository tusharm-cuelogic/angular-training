'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', 'dashboardService', '$location', 'localStorageService', function($scope, $state, dashboardService, $location, localStorageService){

        	$scope.login = function() {

        		if($scope.email && $scope.password) {
        			var getUsers = dashboardService.getUserList().userDetails;
        			
        			var userExists = false;
                    angular.forEach(getUsers, function(value, key) {
						
						if (!userExists) {

                            if (value.username === $scope.email && value.password === $scope.password) {
                                userExists = true;

                                var userinfo = {
                                                "id": value.id,
                                                "name": value.name,
                                                "department": value.department,
                                                "salary": value.salary,
                                                "image": value.image,
                                                "username": value.username,
                                            };

                                localStorageService.set("userinfo", userinfo);
                            }  
                        }
					});

                    if (userExists) {
                        $location.path('/dashboard');
                    } else {
                        alert("Username and Password is incorrect")
                    }
        			
        		} else {
        			alert("Please enter username and password")
        		}
		    };

        }]);

    // function loginController($scope, $state) {
    //     console.log("Inside login controller");
    // }

})();
