(function() {
  'use strict';
  angular.module('webApp', ['ngMaterial'])
	.controller('mainController', function($scope){
		var mainCtrl = this;
		
		mainCtrl.name = 'Aditya Ghosh';
	})
	.service('appService', [function appService(){
		this.getAppData  = function(){
			return $http({method: 'GET',url: ''}).then(function successCallback(response) {
							return response.data;
				   }, function errorCallback(response) {
							return response.data;
				   });
		}
	}])
	.factory('appFactory', [function appFactory(){
		var appFactory = {};
		return appFactory;
	}])
	.directive('component',['RecursionHelper', function(RecursionHelper){
		var componentDef = {
			restrict : 'E',
			scope : {},
			template : '<div ng-repeat="node in treeData">'+
					   '</div>',
			link: function(scope, element, attr) {
				
			}
		};
		return componentDef;
	}]);
})();