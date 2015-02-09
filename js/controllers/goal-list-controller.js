( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).controller( 'goalListController', [

        '$scope',
        '$q',
        'Goal',

        function ( $scope, $q, Goal ) {
            $scope.model = {
                colors: [ ],
                goals: Goal.query( ),
                goal: {
                    title: ''
                }
            };

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