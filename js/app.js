( function ( ) {
    'use strict';

    var app = angular.module( 'dbtc', [
        'ngResource'
    ] );

    app.config( [

        '$httpProvider',

        function ( $httpProvider ) {
            $httpProvider.interceptors.push( 'authInterceptor' );
        }
    ] );

} )( )