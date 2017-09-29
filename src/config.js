module.exports = function (settings, $routeProvider, $compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);

	$routeProvider
		.when('/', {
			template: require('views/placeholder.html')
		})
		.otherwise({
			redirectTo: '/'
		})

	for (let i in settings.views)
		if (settings.views[i].active === true) 
			$routeProvider.when(settings.views[i].path, {
				template: settings.views[i].template
			})
}
module.exports.$inject = ['settings', '$routeProvider', '$compileProvider'] 