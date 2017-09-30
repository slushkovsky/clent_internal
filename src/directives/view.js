module.exports = function() {
    return {
        restrict: 'E', 
        template: '<ng-transclude ng-if="$root.mode === \'view\'"></ng-transclude>',
        transclude: true,
    }
}
