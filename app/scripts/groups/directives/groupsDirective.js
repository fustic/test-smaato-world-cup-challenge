'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    templateUrl: '/scripts/groups/views/groups.html',
    controller: 'GroupsController',
    controllerAs: 'groups',
    link: utils.emptyLinkFunction
  };
};
