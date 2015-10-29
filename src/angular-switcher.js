(function (angular) {
	
	var Switcher = (function () {
		
		function Switcher(sce) {
			this.restrict    = 'E';
			this.require     = 'ngModel';
			this.scope       = {
				model:      '=ngModel',
				trueValue:  '=?',
				trueLabel:  '@?',
				falseValue: '=?',
				falseLabel: '@?'
			};
			this.template    =
				'<div class="switcher" ng-class="{active:shadowModel}">' +
					'<span class="switcher-label false" ng-bind-html="trustedHtml(falseLabel)" ng-click="shadowModel=false"></span>' +
					'<label class="switcher-line">' +
						'<input type="checkbox" ng-model="shadowModel" ng-change="model=shadowModel ? trueValue : falseValue">' +
					'</label>' +
					'<span class="switcher-label true" ng-bind-html="trustedHtml(trueLabel)" ng-click="shadowModel=true"></span>' +
				'</div>';
			$sce = sce;
		};
		Switcher.prototype.$inject = ['$sce'];
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
			
			$scope.trustedHtml = function (value) {
				return $sce.trustAsHtml(value);
			};
			$scope.$watch('model', function () {
				$scope.shadowModel = $scope.model == $scope.trueValue;
			});
		};
		
		return Switcher;
	})();
	
	angular
		.module('switcher', [])
		.directive('switcher', ['$sce', function ($sce) {
			return new Switcher($sce);
		}]);
	
})(window.angular);