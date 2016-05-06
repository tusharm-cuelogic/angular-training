'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$rootScope', '$scope', '$state', 'menuService', 'localStorageService', baseController]);

    function baseController($rootScope, $scope, $state, menuService, localStorageService) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = menuService.getSidebarMenuList().userMenu;
        var employee = localStorageService.get('employeeinfo'); 
        $rootScope.user_name = employee.name;
    }

})();
