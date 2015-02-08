( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).factory( 'settingsService', [

        function ( ) {
            return {
                auth: {
                    parseApplicationId: 'a1ONRg1Z94cA1gutzcGCc6liB4uRYVjLZZrtV4Lv',
                    parseKey: 'Ak3PeQubSv0CpuIJD2Fg9Q4ZSVei0XQy1YnlPUlz'
                },
                rest: {
                    baseUrl: 'https://api.parse.com/1'
                }
            };
        }
    ] );

} )( )