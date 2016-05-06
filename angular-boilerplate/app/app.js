'use strict';

(function() {

    // Declare app level module
    angular
        .module('angularClientApp', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'localStorage.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase])
        .run(['$state', handleAuth]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
    }

    function handleAuth($state) {
        // 
    }


})();
