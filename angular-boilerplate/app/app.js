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
            'interceptor.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user'
        ])
        .config(['$urlRouterProvider', '$locationProvider', '$httpProvider', initializeConfigurationPhase])
        .run(['$rootScope', '$state', 'localStorageServiceWrapper', handleAuth]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');

        $httpProvider.interceptors.push('interceptorService');
    }

    function handleAuth($rootScope, $state, localStorageServiceWrapper) {
        
        $rootScope.$on('$stateChangeStart', 
            function (event, toState, toParams, fromState, fromParams) {
                $rootScope.currentState = $state;
                var is_authenticated = localStorageServiceWrapper.get('authenticated');
                
                if(is_authenticated) {
                    if(toState == 'login' && fromState != null) {
                        $state.transitionTo(fromState);
                    }
                } else if( toState != 'login' && !is_authenticated) {
                    $state.transitionTo( 'login' );
                    event.preventDefault();
                    console.log('You\'ve been logged out, please log in again!');
                } 
            }
        );
    }


})();
