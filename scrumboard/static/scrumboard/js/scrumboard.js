(function(){
    'ues strict';

    angular.module('scrumboard.demo', [])
        .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
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

        $scope.login = function() {
            $http.post('/auth_api/login/',
                {username: 'shireenrao', password: '0987qwer'})
                .then(
                    function (response) {
                        alert('success.. refresh screen!');
                    },
                    function () {
                        alert('failure');
                    }
                );
        };

        $scope.data = [];
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });


    }

}());