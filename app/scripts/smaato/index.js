var
  appConfig = require('../config/app.json'),
  angular = require('angular'),
  webApp = angular.module('smaatoWorldCupChallenge', [
    'ct.ui.router.extras',
    'ngMessages',
    'ngMaterial',
    'ngSanitize'
  ])
    .config(require('./router'))
    .config(['$mdThemingProvider', function($mdThemingProvider) {
      $mdThemingProvider.theme('error')
        .primaryPalette('pink');
      $mdThemingProvider.theme('success')
        .primaryPalette('green');
    }])
    .controller('navigationController', require('./controllers/navigationController'))
    .directive('navigation', require('./directives/navigationDirective'))
    .directive('httpLoader', require('./directives/httpLoaderDirective'))
    .run(['LoggerService', function (LoggerService) {
      LoggerService.consolelog('the app started, ver.: ' + appConfig.version);
    }])
    .run(['$rootScope', '$state', '$stateParams', '$window',
      function ($rootScope, $state, $stateParams, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function () {
          $window.scrollTo(0, 0);
        });

      }]);

module.exports = webApp;
