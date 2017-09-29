module.exports = function() {
	return {
		restrict: 'E',
		template: require('./templates/enhanсementsList.html'),
		controller: function($scope) {
			$scope.model = [];
		}
	}
}