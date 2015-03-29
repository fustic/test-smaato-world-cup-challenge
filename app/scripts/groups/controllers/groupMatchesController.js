'use strict';

groupMatchesController.$inject = [
  'MatchesService', 'UtilService', '$scope'
];

/**
 * @class GroupMatchesController
 */
function groupMatchesController(MatchesService, UtilService, $scope) {

  var group = $scope.group;

  //MatchesService.getGroup(groupID).then(function success(group) {
  //  this.data = group;
  //}.bind(this), function error(err) {
  //  UtilService.showErrorMessage('Can not load group', err);
  //});
}

module.exports = groupMatchesController;
