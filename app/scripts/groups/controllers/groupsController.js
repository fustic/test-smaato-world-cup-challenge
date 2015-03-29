'use strict';

groupsController.$inject = [
  'GroupsService', 'UtilService'
];

/**
 * @class GroupsController
 */
function groupsController(GroupsService, UtilService) {

  this.list = [];
  this.loadGroups = function loadGroups() {
    this.list = [];
    GroupsService.getGroups().then(function success(response) {
        this.list = response.groups;
      }.bind(this), function error(err) {
        UtilService.showErrorMessage('Can not load groups', err);
      });
  };
}

module.exports = groupsController;
