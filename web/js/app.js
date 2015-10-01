/**
 * Created by James Schonian on 9/30/15.
 */
'use strict';

var radioStationApp = angular.module('RadioStationApp', ['ngRoute', 'ui.bootstrap', 'RadioStationApp.controllers'])

    radioStationApp.config(['$routeProvider',
        function($routeProvider, RadioStationController) {
            $routeProvider.when('/', { controller:'RadioStationController' });
            $routeProvider.otherwise({ redirectTo: '/' });
    }]);