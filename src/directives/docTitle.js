module.exports = function() {
	return {
		restrict: 'E',
		template: require('./templates/doc-title.html'), 
		scope: {
			modelName: '=', 
			modelDate: '=', 
			modelLogoSrc: '='
		}
	}
}