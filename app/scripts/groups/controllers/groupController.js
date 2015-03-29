'use strict';

groupController.$inject = [
  '$stateParams', 'GroupsService', 'UtilService'
];

/**
 * @class
 * @name GroupController
 * @param {ui.router.$stateParams} $stateParams
 * @param {GroupsService} GroupsService
 * @param {UtilService} UtilService
 */
function groupController($stateParams, GroupsService, UtilService) {
  var groupID = +$stateParams.groupID;

  this.data = {};

  GroupsService.getGroup(groupID).then(function success(group) {
    this.data = group;
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load group', err);
  });
}

module.exports = groupController;
