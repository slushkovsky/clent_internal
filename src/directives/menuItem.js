module.exports = function($location) {
	return {
		restrict: 'E',
		template: `
			<img src="{{ icon }}"/>
			<span>{{ name }}</span>`,
		scope: {
			icon: '@',
			name: '@',
			active: '@',
			href: '@'
		},
		link: function(scope, elem, attrs) {
			scope.active = scope.active == false.toString();

			if (scope.active === true) 
				elem.css('opacity', '.35');

			elem.bind('click', function() {
				$location.path(scope.href);
				scope.$apply();
	      	});

	      	elem.bind('mouseover', function() {
	      		if (scope.active !== true)
	        		elem.css('cursor', 'pointer');
	      	});
	    }
	}
}
module.exports.$inject = ['$location']