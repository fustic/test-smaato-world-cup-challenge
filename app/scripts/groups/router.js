'use strict';

appRouter.$inject = ['$stateProvider'];

/**
 * @name groups router
 * @param {ui.router.state.$stateProvider} $stateProvider
 */
function appRouter($stateProvider) {
  $stateProvider
    .state('groups', {
      url: '/groups/',
      template: '<groups layout-fill></groups>'
    });
  $stateProvider
    .state('group', {
      url: '/groups/:groupID/',
      templateUrl: '/scripts/groups/views/group.html',
      controller: 'GroupController',
      controllerAs: 'group'
    });

}

module.exports = appRouter;
