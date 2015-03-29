'use strict';

groupController.$inject = [
  '$stateParams', 'GroupsService', 'UtilService'
];

/**
 * @class GroupController
 */
function groupController($stateParams, GroupsService, UtilService) {
  var groupID = $stateParams.groupID;

  this.data = {};

}

module.exports = groupController;
