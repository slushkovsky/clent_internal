import 'css/section.css'

module.exports = function() {
    return {
        restrict: 'E',
        template: require('./templates/section.html'),
        scope: {
            title: '@',
            titleOnView: '@'
        },
        controller: function($scope) {
            $scope.enabled = true;
        },
        transclude: true
    }
}
