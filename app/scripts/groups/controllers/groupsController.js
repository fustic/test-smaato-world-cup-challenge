'use strict';

groupsController.$inject = [
  'GroupsService', 'UtilService'
];

/**
 * @class
 * @name GroupsController
 * @param {GroupsService} GroupsService
 * @param {UtilService} UtilService
 */
function groupsController(GroupsService, UtilService) {

  this.list = [];
  this.loadGroups = function loadGroups() {
    this.list = [];
    GroupsService.getGroups().then(function success(response) {
        this.list = response.data;
      }.bind(this), function error(err) {
        UtilService.showErrorMessage('Can not load groups', err);
      });
  };

  this.loadGroups();
}

module.exports = groupsController;
