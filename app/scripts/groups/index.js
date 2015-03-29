'use strict';

/**
 * @module smaato.groups
 * @name smaatoGroups
 * @description show groups information
 */

var
  angular = require('angular'),
  groups = angular
    .module('smaatoGroups', [
      'ct.ui.router.extras',
      'googlechart'
    ])
    .service('GroupsService', require('./services/groupsService'))
    .controller('GroupsController', require('./controllers/groupsController'))
    .controller('GroupController', require('./controllers/groupController'))
    .controller('GroupTeamsChartController', require('./controllers/groupTeamsChartController'))
    .controller('GroupMatchesController', require('./controllers/groupMatchesController'))
    .directive('groups', require('./directives/groupsDirective'))
    .directive('group', require('./directives/groupDirective'))
    .directive('groupCard', require('./directives/groupCardDirective'))
    .directive('groupTeamsTable', require('./directives/groupTeamsTableDirective'))
    .directive('groupTeamsChart', require('./directives/groupTeamsChartDirective'))
    .directive('groupMatches', require('./directives/groupMatchesDirective'))
    .config(require('./router'));

module.exports = groups;
