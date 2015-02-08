( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).factory( 'Goal', [

        '$resource',
        'settingsService',
        'transformService',

        function ( $resource, settingsService, transformService ) {
            return $resource( settingsService.rest.baseUrl + '/classes/Goal/:id', { }, {
                query: { method: 'GET', isArray: true, transformResponse: [
                    transformService.parseJson,
                    transformService.stepIntoResults
                ] }
            } );
        }
    ] );

} )( )