( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).controller( 'goalListController', [

        '$scope',
        '$q',
        'Goal',

        function ( $scope, $q, Goal ) {
            $scope.model = {
                colors: { },
                goals: [],
                goal: {
                    title: ''
                }
            };

            var generateColors = function ( objects ) {
                objects.forEach( function ( o ) {
                    var canvas = document.createElement( 'canvas' );
                    canvas.height = canvas.width = 24;
                    canvas.getContext( '2d' ).fillRect( 0, 0, 24, 24 );
                    $scope.model.colors[ o.objectId ] = canvas.toDataURL( );
                } );
                return objects;
            };

            Goal.query( ).$promise
                .then( generateColors )
                .then( function ( g ) { $scope.model.goals = g } );

            $scope.deleteGoals = function ( ) {
                $q.all( $scope.model.goals.slice( ).map( function ( goal ) {
                    return Goal.delete( { id: goal.objectId } ).$promise;
                } ) ).then( function ( ) {
                    $scope.model.goals = [ ];
                } );
            };

            $scope.saveGoal = function ( ) {
                var goal = new Goal( $scope.model.goal );

                goal.$save( ).then( function ( remote ) {
                    $scope.model.goals.push( angular.extend( remote, $scope.model.goal ) );
                } );
            }
        }
    ] );

} )( )