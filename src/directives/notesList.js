module.exports = function() {
	return {
		restrict: 'E',
		template: require('./templates/notesList.html'), 
		scope: {
			fieldName: '@', 
			fieldCategory: '@', 
			fieldCategoryVariants: '=',
			fieldLevel: '@',
			fieldLevelVariants: '=', 
			fieldDescr: '@', 
			fieldFile: '@'
		},
		controller: function($scope) {
	            $scope.items = [];
		}
	}
}
