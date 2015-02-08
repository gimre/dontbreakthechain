( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).factory( 'transformService', [

        function ( ) {
            return {
                parseJson: function ( data ) {
                    return angular.fromJson( data );
                },
                stepIntoResults: function ( data ) {
                    return data.results ? data.results : data;
                }
            };
        }
    ] );

} )( )