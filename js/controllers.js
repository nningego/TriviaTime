var triviaControllers = angular.module('triviaControllers', ['firebase', 'triviaServices']);

triviaControllers.controller('QuestionListCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    $scope.questions = FirebaseService.getAllQuestions();

    $scope.answerQuestion = function (question, selectedAnswer) {
        question.answered = true;
        question.correct = (question.answer === selectedAnswer);
    };

    $scope.deleteQuestion = function (questionId) {
        $scope.questions.$remove(questionId);
    }

}]);

triviaControllers.controller('QuestionNewCtrl', ['$scope', '$firebase', '$location',
    function ($scope, $firebase, $location) {
        $scope.question = {};

        $scope.persistQuestion = function (question) {
            $scope.questions = FirebaseService.getAllQuestions();

            $scope.questions.$add(question).then(function (ref) {
                $location.url('/questions');
            });
        };
    }]);

triviaControllers.controller('QuestionDetailCtrl', ['$scope', '$firebase', '$routeParams', '$location',
    function ($scope, $firebase, $routeParams, $location) {

        $scope.question = FirebaseService.getQuestion($routeParams.questionId)

        $scope.persistQuestion = function (question) {
            $scope.question.$update({
                question: question.question,
                option1: question.option1,
                option2: question.option2,
                answer: question.answer
            }).then(function (href) {
                $location.url('/questions');
            });
        };

    }]);