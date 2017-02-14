/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
   '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   'use strict';
   $stateProvider
      .state('home-view', {
         url: '/home',
         templateUrl: 'module/HomeView/HomeView.html',
         controller: 'HomeController'
      }
   );
   $urlRouterProvider.otherwise("/");
}]);
