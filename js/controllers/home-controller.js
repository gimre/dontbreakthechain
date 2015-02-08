( function ( ) {
    'use strict';

    angular.module( 'dbtc' ).controller( 'homeController', [

        '$scope',
        '$q',
        'Goal',

        function ( $scope, $q, Goal ) {
            $scope.model = {
                goals: Goal.query( ),
                form: {
                    goalTitle: ''
                }
            };

            $scope.deleteGoals = function ( ) {
                $scope.model.goals.slice( ).map( function ( goal ) {
                    $q.all( Goal.delete( { id: goal.objectId } ).$promise ).then( function ( ) {
                        $scope.model.goals = [ ];
                    } );
                } );
            };

            $scope.saveGoal = function ( ) {
                var goal = new Goal( {
                    title: $scope.model.form.goalTitle
                } );

                goal.$save( );
            }
        }
    ] );

} )( )