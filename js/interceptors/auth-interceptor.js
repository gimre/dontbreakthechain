( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).factory( 'authInterceptor', [

        'settingsService',

        function ( settingsService ) {

            return {
                request: function ( config ) {
                    config.headers[ 'X-Parse-Application-Id' ] = settingsService.auth.parseApplicationId;
                    config.headers[ 'X-Parse-REST-API-Key' ]   = settingsService.auth.parseKey;

                    return config;
                }
            };

        }
    ] );

} )( )