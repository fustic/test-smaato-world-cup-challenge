'use strict';

groupMatchesController.$inject = [
  'GroupsService', 'UtilService', '$scope'
];

/**
 * @class GroupMatchesController
 */
function groupMatchesController(GroupsService, UtilService, $scope) {

  var
    group = $scope.group,
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
