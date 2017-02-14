/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */

(function () {
    'use strict';
    ckApp.controller("LanguageController", ['$scope', '$state', '$ionicHistory', '$translate', 'rt', LanguageController]);
    function LanguageController($scope, $state, $ionicHistory, $translate, rt) {

        function _init() {
            $scope.language = {};

            var languageCode = rt.getLanguageCode();
            if (languageCode !== null && languageCode !== undefined) {
                $scope.language.code = languageCode;
            }

            $scope.changeLanguage = function () {
                rt.setLanguageCode($scope.language.code);
                $ionicHistory.goBack();
            };
        }

        _init();
    }
})();


