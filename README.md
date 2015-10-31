# Angular Switcher
[![Join the chat at https://gitter.im/indrimuska/angular-switcher](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/indrimuska/angular-switcher?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular Switcher is an AngularJS directive that models toggle switches.

Check out the demo page: [http://indrimuska.github.io/angular-switcher](http://indrimuska.github.io/angular-switcher).

![Angular Switcher](http://indrimuska.github.io/angular-switcher/img/angular-switcher.png)

## Installation
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
<script src="js/vendor/angular-switcher/dist/angular-switcher.min.js"></script>
<link href="css/vendor/angular-switcher/dist/angular-switcher.min.css" rel="stylesheet">
```
```js
var app = angular.module('MyApp', ['switcher']);
```

## Demo
[http://indrimuska.github.io/angular-switcher](http://indrimuska.github.io/angular-switcher)

## Options
Parameter | Type | Description
---|---|---
ng-model | `string` | Assignable angular expression to data-bind to.
ng-disabled | `expression` | If the expression is truthy, it disable the switcher.
true-value | `expression` | The value to which the expression should be set when selected (default: `true`).
false-value | `expression` | The value to which the expression should be set when not selected (default: `false`).
true-label | `string` | HTML expression label assigned to the selected value (default: `On`).
true-label | `string` | HTML expression label assigned to the unselected value (default: `Off`).

## Events
Callback | Parameters | Description
---|---|---
ng-change | `newValue`, `oldValue` | Fired every time the switch has been toggled.

## License
Copyright (c) 2015 Indri Muska. Licensed under the MIT license.