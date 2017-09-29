angular.module('app').controller('commercialOfferCtrl', [
	'$scope', 
	'$location', 
	'docData', 
	function($scope, $location, docData) {
		docData.documentName = 'Коммерческое предложение';
		
		$scope.docData = docData;
	}
]);