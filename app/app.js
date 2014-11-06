/**
 * Angular App to drive the Home page.
 * Below is a list of custom directives which
 * make up the Page
 */

var app = angular.module('conference4', []);

app.directive('topPart', function() {
        return {
            restrict: 'E',
            templateUrl: 'Custom Directives Files/top-part.html'
        };
});

app.directive('mainBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Custom Directives Files/main-block.html'
    };
});

app.directive('bodyText', function() {
    return {
        restrict: 'E',
        templateUrl: 'Custom Directives Files/body-text.html'
    };
});

app.directive('contactUs', function() {
    return {
        restrict: 'E',
        templateUrl: 'Custom Directives Files/contact-us.html'
    };
});





