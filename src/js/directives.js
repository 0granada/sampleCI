
angular.module('MainApp').directive('card', function(){
    return {
        restrict: 'E',
        scope: {
            name: '=',
            description: '=',
            image: '='
        },
        replace: true,
        templateUrl: '/js/views/card.html',
        controller: 'CardController',
        controllerAs: 'vm'
    };
});

angular.module('MainApp').directive('newItem', function(){
    return {
        restrict: 'E',
        scope: {
        },
        replace: true,
        templateUrl: '/js/views/new.html',
        controller: 'NewItemController',
        controllerAs: 'vm'
    };
});
