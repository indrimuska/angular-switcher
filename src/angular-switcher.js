(function (angular) {
	
	var Switcher = (function () {
		
		function Switcher() {
			this.restrict    = 'E';
			this.require     = 'ngModel';
			this.scope       = {
				model:      '=ngModel',
				trueValue:  '=?',
				trueLabel:  '@?',
				falseValue: '=?',
				falseLabel: '@?'
			};
			this.templateUrl = 'angular-switcher.html';
		};
		Switcher.prototype.link = function ($scope, $element, $attrs, $controller) {
			var defaults = {
					trueValue:  true,
					trueLabel:  'On',
					falseValue: false,
					falseLabel: 'Off'
				};
			
			angular.forEach(defaults, function (value, key) {
				if (!angular.isDefined($scope[key]))
					$scope[key] = value;
			});
			
			$scope.$watch('model', function () {
				$scope.shadowModel = $scope.model == $scope.trueValue;
			});
		};
		
		return Switcher;
	})();
	
	angular
		.module('switcher', [])
		.run(['$templateCache', function ($templateCache) {
			$templateCache.put('angular-switcher.html',
				'<div class="switcher" ng-class="{active:shadowModel}">' +
					'<span class="switcher-label false" ng-bind="falseLabel" ng-click="shadowModel=false"></span>' +
					'<label class="switcher-line">' +
						'<input type="checkbox" ng-model="shadowModel" ng-change="model=shadowModel ? trueValue : falseValue">' +
					'</label>' +
					'<span class="switcher-label true" ng-bind="trueLabel" ng-click="shadowModel=true"></span>' +
				'</div>'
			);
		}])
		.directive('switcher', function () {
			return new Switcher();
		});
	
})(window.angular);