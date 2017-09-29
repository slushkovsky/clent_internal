module.exports = function() {
	return {
		restrict: 'E',
		template: require('./templates/btn-generate.html'),
		controller: function($scope) {
			$scope.generatePDF = function() {
				html2canvas(document.getElementById('exportthis'), {
		            onrendered: function (canvas) {
		                var data = canvas.toDataURL();
		                var docDefinition = {
		                    content: [{
		                        image: data,
		                        width: 500,
		                    }]
		                };
		                pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
		            }
		        });
			}
		}
	}
}; 