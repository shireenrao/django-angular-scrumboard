(function(){
    'ues strict';

    angular.module('scrumboard.demo', [])
        .controller('ScrumboardController', ['$scope', ScrumboardController]);

    function ScrumboardController($scope) {
        $scope.add = function(list, title) {
            var card = {
                title: title
            };
            list.cards.push(card);
        };

        $scope.data = [
            {
                name: 'TODO',
                cards: [
                    {
                        title: 'Create Model'
                    },
                    {
                        title: 'Create View'
                    },
                    {
                        title: 'Migrate Database'
                    }
                ]
            },
            {
                name: 'Angular Demo',
                cards: [
                    {
                        title: 'Write HTML'
                    },
                    {
                        title: 'Write Javascript'
                    }
                ]

            }

        ];
    }

}());