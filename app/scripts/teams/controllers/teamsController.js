'use strict';

teamsController.$inject = [
  'TeamsService', 'UtilService'
];

/**
 * @class TeamsController
 */
function teamsController(TeamsService, UtilService) {

  this.list = [];
  this.loadTeams = function loadTeams() {
    this.list = [];
    TeamsService.getTeams().then(function success(response) {
      this.list = response.data;
    }.bind(this), function error(err) {
      UtilService.showErrorMessage('Can not load teams', err);
    });
  };

  this.loadTeams();
}

module.exports = teamsController;
