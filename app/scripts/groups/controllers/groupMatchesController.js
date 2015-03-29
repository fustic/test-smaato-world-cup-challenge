'use strict';

groupMatchesController.$inject = [
  'GroupsService', 'UtilService', '$scope'
];

/**
 * @class
 * @name GroupMatchesController
 * @param {GroupsService} GroupsService
 * @param {UtilService} UtilService
 * @param {$scope} $scope
 */
function groupMatchesController(GroupsService, UtilService, $scope) {

  var
    group = $scope.group,
    /**
     * collection of teams fifa codes from giving group
     * @type {string[]}
     */
    teamIds = [],
    teamsLen = group.teams.length,
    team;
  this.list = [];

  while (teamsLen--) {
    team = group.teams[teamsLen].team;
    teamIds.push(team.fifa_code);
  }

  GroupsService.getGroupMatches(teamIds).then(function success(matches) {
    this.list = matches;
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load group matches', err);
  });
}

module.exports = groupMatchesController;
