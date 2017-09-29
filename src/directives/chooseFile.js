module.exports = function() {
	return {
		restrict: 'E', 
		template: require('./templates/choose-file.html'), 
		scope: {
			placeholder: '@',
			file: '=modelFile'
		},
		link: function(scope, elem, attrs) {
        	var button = elem.find('button');
        	var input = angular.element(elem[0].querySelector('input#fileInput'));
        	button.bind('click', function() {
				input[0].click();
        	});
        	input.bind('change', function(e) {
	        	scope.$apply(function() {
	                var files = e.target.files;

	                if (files.length != 1)
	                    return;

	                var reader = new FileReader();

	                reader.onload = function(e) {
	                    if ('parseJson' in attrs) {
	                            var data = JSON.parse(atob(e.target.result.replace('data:application/json;base64,', '')));

	                            for (var key in data) 
	                                eval(`scope.file.${key} = data.${key}`);
	                    }
	                    else 
	                        scope.file = e.target.result;

	                    scope.$apply();
	                }
	                reader.readAsDataURL(files[0]);

	                angular.element(elem[0].querySelector('input:not(#fileInput')).val(files[0].name);
	                angular.element(elem[0].querySelector('md-input-container')).attr('class', angular.element(elem[0].querySelector('md-input-container')).attr('class') + ' md-input-has-value')
	        	});
	        });
        }
	}
};