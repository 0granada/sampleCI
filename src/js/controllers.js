
angular.module('MainApp').controller('MainController', ['$scope', '$rootScope', '$attrs', function($scope, $rootScope, $attrs){
    var vm = this;
    vm.items = [
        /*
        {
            name: "Lisa",
            description: "Young, Hippi and Happy",
            image: "https://randomuser.me/api/portraits/women/54.jpg"
        },
        {
            name: "Lea",
            description: "The life is only one.",
            image: "https://randomuser.me/api/portraits/women/24.jpg"
        },
        {
            name: "Mika",
            description: "Be free...",
            image: "https://randomuser.me/api/portraits/women/72.jpg"
        }
        //*/
    ];
    $rootScope.$on('addNewItem', function MainController_addNewItem(evt, data){
        var rand = parseInt(Math.random()*100, 10);
        vm.items[vm.items.length] = {
            name: data.name,
            description: data.description,
            image: "https://randomuser.me/api/portraits/women/"+rand+".jpg"
        };
    });
}]);

angular.module('MainApp').controller('CardController', ['$scope', '$element', function($scope, $element){
    var vm = this;
    vm.name = $scope.name;
    vm.description = $scope.description;
    vm.image = $scope.image;
}]);

angular.module('MainApp').controller('NewItemController', ['$scope', '$rootScope', function($scope, $rootScope){
    var vm = this;
    vm.addItem = function(){
        $rootScope.$emit('addNewItem', {name:vm.name, description:vm.description});
        vm.name = "";
        vm.description = "";
    };
}]);
