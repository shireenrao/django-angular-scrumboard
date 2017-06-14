(function(){
    'ues strict';

    angular.module('scrumboard.demo', ['ngRoute'])
        .controller('ScrumboardController', ['$scope', '$http', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, Login) {
        $scope.add = function(list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                function(){
                    alert('could not create card!');
                });

        };

        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.logout = Login.logout;


        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });
        $scope.sortBy='story_points';
        $scope.reverse=true;
        $scope.showFilterr=false;
    }

}());