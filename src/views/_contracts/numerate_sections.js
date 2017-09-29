$(function() {
	$('section').each(function(index) {
		var $h2 = $(this).children('h2');
		var $sub = $(this).find('subsection');

		$h2.html(`${index + 1}. ${$h2.html()}`);

		$sub.each(function(subindex) {
			$(this).html(`${index + 1}.${subindex + 1}. ${$(this).html()}`);

			var $subsub = $(this).find('subsubsection');

			$subsub.each(function(subsubindex) {
				$(this).html(`${index + 1}.${subindex + 1}.${subsubindex + 1}. ${$(this).html()}`);
			})
		});
	}); 
});