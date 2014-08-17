var spa = angular.module('nspa', ['ngRoute']);

spa.config([
	'$routeProvider',
	'$locationProvider',

	 function($routeProvider, $locationProvider){

	 	$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: '/views/home.html',
			controller: 'homeCtrl'
		})
	}])