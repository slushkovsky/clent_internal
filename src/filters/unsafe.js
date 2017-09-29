module.exports = function($sce) { 
	return $sce.trustAsHtml; 
};
module.exports.$inject = ['$sce'];
