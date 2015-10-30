angular
	.module('AngularSwitcherDemo', ['switcher'])
	.controller('AngularSwitcherDemoCtrl', ['$scope', '$log', function ($scope, $log) {
		// init
		$scope.basic  = false;
		$scope.labels = true;
		$scope.values = '€';
		$scope.style  = false;
		
		// change callback
		$scope.onChange = function (newValue, oldValue) {
			$log.log('Switch:', newValue, oldValue);
		};
	}]);

hljs.initHighlightingOnLoad();