module.exports = function($rootScope) {
    return {
        restrict: 'E',
        template: require('./templates/doc-title.html'), 
        scope: {
            defaultDocName: '@'
        },
        controller: function($scope) {
            $scope.docName = $scope.defaultDocName || '';
            $scope.projectName = '';
            $scope.date = new Date(); 
            $scope.logoSrc = '';
        }
    }
}
module.exports.$inject = ['$rootScope'];
