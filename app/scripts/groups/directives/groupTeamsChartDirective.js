'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      'teams': '='
    },
    templateUrl: '/scripts/groups/views/groupTeamsChart.html',
    controller: 'GroupTeamsChartController',
    controllerAs: 'teamChart',
    link: utils.emptyLinkFunction
  };
};
