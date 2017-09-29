import 'css/common.css'

let app = require('angular').module('app', [require('angular-route'), require('angular-material')]); 

app.constant('settings', {
	brand: {
		color: '#0d1722',
		logo: require('img/clent.png')
	},
	views: [
		{
			name: 'КП', 
			img: require('img/icn_com_offer.svg'),
			path: '/commercial_offer',
			template: require('views/commercial_offer.html'),
			active: true
		}, 
		{
			name: 'Анализ сайта', 
			img: require('img/icn_site_analysis.svg'),
			path: '/site_analysis',
			template: require('views/site_analysis.html'),
			active: true
		}, 
		{
			name: 'ГПХ подрядчик',
			img: require('img/icn_contract.svg'), 
			active: false
		}
	]
})

app.config(require('./config.js'));

app.run(['settings', '$rootScope', function(settings, $rootScope) {
	$rootScope.brand = settings.brand;
	$rootScope.views = settings.views;
}])

app.filter('encodeURIComponent', require('./filters/encodeURIComponent.js'));
app.filter('unsafe', require('./filters/unsafe.js'));
app.filter('beautyNumber', require('./filters/beautyNumber.js'));

app.directive('section', require('./directives/section.js'));
app.directive('menuItem', require('./directives/menuItem.js'));
app.directive('menuLayout', require('./directives/menuLayout.js'));
app.directive('chooseFile', require('./directives/chooseFile.js'));
app.directive('docTitle', require('./directives/docTitle.js'));
app.directive('estimate', require('./directives/estimate.js'));
app.directive('problemsList', require('./directives/problemsList.js'));
app.directive('enhancementsList', require('./directives/enhancementsList.js'));
app.directive('btnGenerate', require('./directives/btnGenerate.js'))