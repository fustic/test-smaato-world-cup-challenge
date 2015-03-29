'use strict';

/**
 * @module smaato.teams
 * @name smaatoTeams
 * @description show teams information
 */

var
  angular = require('angular'),
  teams = angular
    .module('smaatoTeams', [
      'ct.ui.router.extras'
    ])
    .service('TeamsService', require('./services/teamsService'))
    .controller('TeamsController', require('./controllers/teamsController'))
    .controller('TeamController', require('./controllers/teamController'))
    .directive('teams', require('./directives/teamsDirective'))
    .config(require('./router'));

module.exports = teams;
