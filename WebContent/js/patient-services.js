var patientModule = angular.module('patientModule', ['ui.bootstrap','angular-rtcomm','healthcareModule','ngAnimate']);

patientModule.factory('PatientService',function ($rootScope, $log, $http,  HealthcareService) {
	
	var agentCall = { visible: false};
	var attributes = [];
	var links = [];
	var user = HealthcareService.user;
	/*
	$rootScope.$watch("user.id", function(newValue){
		// Reload the data
		if(typeof newValue !== 'undefined' || newValue !== null ) {
			var endpointAttributesURL = "../records/" + newValue + ".json";
			$rootScope.$evalAsync(function() {
				$log.info('PatientService: getting attributes at: ' + endpointAttributesURL);
				$http.get(endpointAttributesURL).success (function(data){
					attributes = data.attributes;
					links = data.links;
				}).error(function(data, status, headers, config) {
					$log.info('DoctorService: error accessing attributes: ' + status);
				});
			})
		}
	})
	*/
	
	return {
			user: user,
			attributes: attributes,
			links: links,
      agentCall: agentCall,
      setVisible: function(v) {
      	agentCall.visible= v;
      }
  };
	
}); 

