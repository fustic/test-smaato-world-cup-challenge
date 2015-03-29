'use strict';

var
  _ = require('_');

groupsService.$inject = ['$q', 'Smaato.Config', '$http', 'MatchesService'];

/**
 * @class
 * @name GroupsService
 */
function groupsService($q, Config, $http, MatchesService) {

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
    },
    getGroupMatches: function (teamIds) {
      var
        deferred = $q.defer();

      MatchesService.getMatches().then(function success(response) {
        deferred.resolve(_.filter(response.data, function (match) {
          return teamIds.indexOf(match.home_team.code) !== -1 && teamIds.indexOf(match.away_team.code) !== -1
        }));
      }, function error() {
        deferred.reject();
      });

      return deferred.promise;
    }
  };

  return groupsServiceObject;
}

module.exports = groupsService;
