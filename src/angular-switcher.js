(function (angular) {
	
	var Switcher = (function () {
		
		function Switcher(sce) {
			this.restrict    = 'E';
			this.require     = 'ngModel';
			this.scope       = {
				model:      '=ngModel',
				disabled:   '=?ngDisabled',
				trueValue:  '=?',
				trueLabel:  '@?',
				falseValue: '=?',
				falseLabel: '@?',
				change:     '&?ngChange'
			};
			this.template    =
				'<div class="switcher" ng-class="{active:shadowModel,disabled:disabled}">' +
					'<span class="switcher-label false" ng-bind-html="trustedHtml(falseLabel)" ng-click="set(false)"></span>' +
					'<label class="switcher-line">' +
						'<input type="checkbox" ng-model="shadowModel" ng-disabled="disabled" ng-change="onChange()">' +
					'</label>' +
					'<span class="switcher-label true" ng-bind-html="trustedHtml(trueLabel)" ng-click="set(true)"></span>' +
				'</div>';
			$sce = sce;
		};
		Switcher.prototype.$inject = ['$sce'];
		Switcher.prototype.link = function ($scope, $element, $attrs, $controller) {
			var defaultProperties = { trueValue:  true, falseValue: false, disabled: false },
				defaultAttributes = { trueLabel:  'On', falseLabel: 'Off' };
			
			angular.forEach(defaultProperties, function (value, key) {
				if (!angular.isDefined($scope[key]))
					$scope[key] = value;
			});
			angular.forEach(defaultAttributes, function (value, key) {
				if (!angular.isDefined($scope[key]))
					$attrs[key] = value;
			});
			
			$scope.trustedHtml = function (value) {
				return $sce.trustAsHtml(value);
			};
			$scope.set = function (value) {
				if ($scope.disabled || value == $scope.shadowModel) return;
				if (angular.isFunction($scope.change))
					$scope.change({ newValue: value, oldValue: $scope.shadowModel });
				$scope.shadowModel = value;
			};
			$scope.onChange = function () {
				var oldValue = $scope.model,
					newValue = $scope.shadowModel ? $scope.trueValue : $scope.falseValue;
				
				$scope.model = newValue;
				if (angular.isFunction($scope.change))
					$scope.change({ newValue: newValue, oldValue: oldValue });
			};
			
			$scope.$watch('model', function () {
				$scope.shadowModel = $scope.model == $scope.trueValue;
			});
			$scope.$watch('shadowModel', function () {
				$scope.model = $scope[$scope.shadowModel + 'Value'];
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