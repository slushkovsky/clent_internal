module.exports = function($rootScope) {
    return {
        restrict: 'E',
        template: require('./templates/btn-generate.html'),
        controller: function($scope) {
            $scope.generatePDF = function() {
                $rootScope.mode = 'view';
            }
        }
    }
}; 
module.exports.$inject = ['$rootScope'];
