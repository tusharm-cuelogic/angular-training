(function() {

'use strict';

    angular
        .module('interceptor.service', [])
        .factory('interceptorService', ['$location', 'localStorageServiceWrapper', interceptorService]);

    function interceptorService($location, localStorageServiceWrapper) {
        var setInjector = {

            request: function(config) {

                config.headers = config.headers || {};

                if (localStorageServiceWrapper.get('authenticated')) {
                    config.headers['authorization'] = localStorageServiceWrapper.get('authenticated');
                    // $location.path('/dashboard');
                } else {
                    $location.path('/login');
                }
                return config;
            },
            response: function(response, status, config) {

                if (!localStorageServiceWrapper.get("authenticated") || response.status === 401) {
                    $location.path('/login');
                }

                return response;
            }
        };
        return setInjector;
    };
})();