module.exports = function() {
    return {
        restrict: 'E',
        template: '<ng-transclude ng-show="$root.mode === \'edit\'"></ng-transclude>',
        transclude: true,
    }
};
