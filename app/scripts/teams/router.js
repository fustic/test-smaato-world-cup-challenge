'use strict';

appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

/**
 * @name matches router
 * @param {ui.router.state.$stateProvider} $stateProvider
 *
 */
function appRouter($stateProvider, $urlRouterProvider) {
  //$stateProvider
  //  .state('teams', {
  //    url: '/teams/',
  //    template: '<teams layout-fill></teams>'
  //  });
  $urlRouterProvider.when('/teams/', '/teams/GER/');
  $stateProvider
    .state('team', {
      url: '/teams/:teamID/',
      templateUrl: '/scripts/teams/views/team.html',
      controller: 'TeamController',
      controllerAs: 'team'
    });

}

module.exports = appRouter;
