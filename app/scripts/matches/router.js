'use strict';

appRouter.$inject = ['$stateProvider'];

/**
 * @name matches router
 * @param {ui.router.state.$stateProvider} $stateProvider
 */
function appRouter($stateProvider) {
  $stateProvider
    .state('matches', {
      url: '/matches/',
      template: '<matches layout-fill></matches>'
    });
  //$stateProvider
  //  .state('match', {
  //    url: '/matches/:matchID/',
  //    templateUrl: '/scripts/matches/views/match.html',
  //    controller: 'MatchController',
  //    controllerAs: 'match'
  //  });

}

module.exports = appRouter;
