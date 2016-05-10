'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$rootScope', '$scope', '$state', 'menuService', 'localStorageServiceWrapper', baseController]);

    function baseController($rootScope, $scope, $state, menuService, localStorageServiceWrapper) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = menuService.getSidebarMenuList().userMenu;
        var employee = localStorageServiceWrapper.get('employeeinfo'); 
        $rootScope.user_name = employee.name;
    }

})();
