'use strict';

var
  _ = require('_');

groupsService.$inject = ['$q', 'Smaato.Config', '$http', 'MatchesService'];

/**
 * @class
 * @name GroupsService
 * @param {$q} $q
 * @param {Smaato.Config} Config
 * @param {$http} $http
 * @param {MatchesService} MatchesService
 */
function groupsService($q, Config, $http, MatchesService) {

  var groupsServiceObject = {
    /**
     * @this GroupsService
     * @doc methods
     * @name getGroups
     * @description get all groups info
     * @returns {HttpPromise}
     */
    getGroups: function getGroups() {
      return $http.get(Config.api.url + Config.api.endPoints.groups, {
        cache: true
      });
    },
    /**
     * @this GroupsService
     * @doc method
     * @description get information for the group
     * @param {number} groupID
     * @returns {Promise}
     */
    getGroup: function getGroup(groupID) {
      var
        deferred = $q.defer();

      groupsServiceObject.getGroups().then(function success(response) {
        var
          group = _.filter(response.data, function (element) {
            return element.group.id === groupID;
          }, 'group')[0];
        if (group) {
          return deferred.resolve(group.group);
        }
        return deferred.reject();

      }, function error() {
        deferred.reject();
      });

      return deferred.promise;
    },
    /**
     * @this GroupsService
     * @doc method
     * @name getGroupMatches
     * @description get all matches for the giving group based on teams fifa codes
     * @param {string[]} teamIds
     * @returns {Promise}
     */
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
