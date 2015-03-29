'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    templateUrl: '/scripts/groups/views/group.html',
    controller: 'GroupController',
    controllerAs: 'group',
    link: utils.emptyLinkFunction
  };
};
