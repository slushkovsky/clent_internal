import 'css/menu_layout.css'

module.exports = function() {
	return { 
		restrict: 'E',
		template: require('./templates/menuLayout.html'),
		transclude: true
	}
}
