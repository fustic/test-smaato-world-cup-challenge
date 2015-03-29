'use strict';

var
  _ = require('_');

groupsService.$inject = ['$q', 'Smaato.Config', '$http'];

/**
 * @class
 * @name GroupsService
 */
function groupsService($q, Config, $http) {

  var groupsServiceObject = {
    getGroups: function getGroups() {
      return $http.get(Config.api.url + Config.api.endPoints.groups, {
        cache: true
      });
    }
  };

  return groupsServiceObject;
}

module.exports = groupsService;
