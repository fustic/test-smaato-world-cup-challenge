'use strict';

teamController.$inject = [
  '$stateParams', 'TeamsService', 'UtilService', 'MatchesService'
];

/**
 * @class TeamController
 */
function teamController($stateParams, TeamsService, UtilService, MatchesService) {
  var teamID = $stateParams.teamID || 'GER';

  this.data = {};
  this.matches = [];

  TeamsService.getTeam(teamID).then(function success(team) {
    this.data = team;
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load team', err);
  });

  MatchesService.getTeamMatches(teamID).then(function success(response) {
    this.matches = response.data;
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load team matches', err);
  });


}

module.exports = teamController;
