/*global angular*/

angular.module('ckApp')
    .directive('rtSearchBar', ['$timeout', 'rt', function ($timeout, rt) {
        'use strict';
        return {
            restrict: "EA",
            scope: {
                rtFocusOn: "@",
                rtPlaceholder: "@",
                rtModel: "=", // 引用传递（双向绑定）
                rtOnSearch: "&" // 搜索操作
            },
            template: '<div class="rt-search-bar">' +
            '	<div class="_input-wrapper">' +
            '		<i class="ion-ios-search"></i>' +
            '		<input ng-model="rtModel" type="text" focus-on="{{ rtFocusOn }}" placeholder="{{rtPlaceholder}}" />' +
            '	</div>' +
            '	<button class="button button-clear button-small _button-search" ng-click="rtOnSearch()">{{ "component_Search" | translate }}</button>' +
            '</div>',
            replace: true
        };
    }]);