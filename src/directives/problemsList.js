module.exports = function() {
	return {
		restrict: 'E',
		template: require('./templates/problemsList.html'), 
		scope: {
			mode: '=' 
		},
		conroller: function($scope) {
			$scope.problems = [];
		}
	}
}