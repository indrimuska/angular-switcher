# Angular Switcher
Angular Switcher is an AngularJS directive that models toggle switches.

Check out the demo page: http://indrimuska.github.io/angular-switcher.

## Installation
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
<script src="js/vendor/angular-switcher/dist/angular-switcher.min.js"></script>
<link href="css/vendor/angular-switcher/dist/angular-switcher.min.css" rel="stylesheet">
```
```js
var app = angular.module('MyApp', ['switcher']);
```

## Options
Parameter | Type | Description
---|---|---
ng-model | `string` | Assignable angular expression to data-bind to.
true-value | `expression` | The value to which the expression should be set when selected (default: `true`).
false-value | `expression` | The value to which the expression should be set when not selected (default: `false`).
true-label | `string` | HTML expression label assigned to the selected value (default: `On`).
true-label | `string` | HTML expression label assigned to the unselected value (default: `Off`).

## License
Copyright (c) 2015 Indri Muska. Licensed under the MIT license.