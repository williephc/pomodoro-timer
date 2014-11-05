'use strict';

/* Controllers */

var pomodoroTimerControllers = angular.module('pomodoroTimerControllers', []);

pomodoroTimerControllers.controller('pomodoroTimerController', ['$scope', '$interval', '$window',
  function($scope, $interval, $wind) {
    $scope.timers = [];
    $scope.alerts = [];
    $scope.timerOn = false;
    $scope.pomodoroSuccess = false;
    var countdown;

    $scope.startTimer = function() {
      $scope.minutes = 24;
      $scope.seconds = 59;
      $scope.timerOn = true;
      $scope.pomodoroSuccess = false;

      countdown = $interval(function () {
          if ($scope.minutes == 0 && $scope.seconds == 0) {
            $scope.stopTimer();
            $scope.pomodoroSuccess = true;
          }
          else {
            if ($scope.seconds == 0) {
              $scope.minutes--;
              $scope.seconds = 59;
            } else {
              $scope.seconds--;
            }
          }
        }, 10);

    };

    $scope.stopTimer = function() {
      $scope.timers.push({name:$scope.timerName});
      $interval.cancel(countdown);
      countdown = undefined;
      $scope.timerName = '';
      $scope.timerOn = false;
    };

}]);
