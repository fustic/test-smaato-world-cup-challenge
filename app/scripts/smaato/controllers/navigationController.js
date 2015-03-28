'use strict';

navigationController.$inject = ['$mdSidenav', 'Duriana.Config', 'UserAuthService'];

function navigationController($mdSidenav, Config, AuthService) {
  this.close = function () {
    $mdSidenav('left').close();
  };
  this.version = Config.version;
  this.environment = AuthService.getEnv() ? 'production' : 'staging';
  this.changeEnv = function changeEnv() {
    AuthService.changeEnv();
  };
}
module.exports = navigationController;
