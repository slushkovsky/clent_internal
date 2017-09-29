module.exports = function() {
	return {
		restrict: 'E', 
		template: require('./templates/estimate.html'),
		scope: {
			mode: '='
		},
		controller: function($scope) {
			$scope.rates = [];
			$scope.estimate = {
				totalPrice: 0, 
				details: []
			};	
			$scope.updTotalPrices = function() {
				$scope.estimate.totalPrice = 0;

				for (var i in $scope.estimate.details) {
					$scope.estimate.details[i].totalPrice = 0; 

					for (var j in $scope.estimate.details[i].substeps)
						$scope.estimate.details[i].totalPrice += $scope.estimate.details[i].substeps[j].price; 

					$scope.estimate.totalPrice += $scope.estimate.details[i].totalPrice;
				}
			}
		}
	}
}