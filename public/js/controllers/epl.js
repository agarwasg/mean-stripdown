
window.angular.module('ngff.controllers.epl',[])
    .controller('EPLController',['$scope','$routeParams','Global','EPL',
        function($scope, $routeParams, Global, EPL) {
            $scope.global = Global;
            $scope.eplTeams = EPL.teams;
            $scope.eplTeam = EPL.teams[$routeParams['eplTeamId']] ;

        }]);
