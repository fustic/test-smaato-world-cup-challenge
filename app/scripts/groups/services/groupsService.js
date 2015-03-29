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
    },
    getGroup: function getGroup(groupID) {
      var
        deferred = $q.defer();

      groupsServiceObject.getGroups().then(function success(response) {
        var
          group = _.filter(response.data, function (element) {
            return element.group.id === groupID;
          }, 'group')[0];
        if (group) {
          deferred.resolve(group.group);
        } else {
          deferred.reject();
        }
      }, function error() {
        deferred.reject();
      });

      return deferred.promise;
    }
  };

  return groupsServiceObject;
}

module.exports = groupsService;
