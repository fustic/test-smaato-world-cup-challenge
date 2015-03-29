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
      'ct.ui.router.extras'
    ])
    .service('GroupsService', require('./services/groupsService'))
    .controller('GroupsController', require('./controllers/groupsController'))
    .controller('GroupController', require('./controllers/groupController'))
    .directive('groups', require('./directives/groupsDirective'))
    .directive('group', require('./directives/groupDirective'))
    .config(require('./router'));

module.exports = groups;
