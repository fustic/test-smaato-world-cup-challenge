'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'AE',
    scope: {
      'events': '='
    },
    templateUrl: '/scripts/matches/views/matchEvents.html'
  };
};
