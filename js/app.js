var triviaApp = angular.module('triviaApp', ['ngRoute', 'triviaControllers', 'triviaServices']);

triviaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/questions', {
        templateUrl: 'partials/question-list.html',
        controller: 'QuestionListCtrl'
    })
        .when('/questions/new', {
            templateUrl: 'partials/question-form.html',
            controller: 'QuestionNewCtrl'
        })
        .when('/questions/:questionId', {
            templateUrl: 'partials/question-form.html',
            controller: 'QuestionDetailCtrl'
        })
        .otherwise({
            redirectTo: 'questions'
        });
}]);
