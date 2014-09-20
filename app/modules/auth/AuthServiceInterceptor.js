'use strict';

angular.module('crmy.auth').factory('AuthServiceInterceptor',
    [   '$rootScope',
        '$q',
        '$cookieStore',

        function AuthServiceInterceptor ($rootScope, $q, $cookieStore) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};
                    if ($cookieStore.get('auth_token')) {
                        config.headers.Authorization = $cookieStore.get('auth_token');
                    }
                    return config;
                },
                response: function (response) {
                    if (response.status === 401) {
                    // handle the case where the user is not authenticated
                    }
                    return response || $q.when(response);
                }
            };
        }
    ]
);
