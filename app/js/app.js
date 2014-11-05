'use strict';

/* App Module */

var pomodoroTimerApp = angular.module('pomodoroTimerApp', [
  'ngRoute',
  'pomodoroTimerControllers',
]);

pomodoroTimerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'pomodoroTimerController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
