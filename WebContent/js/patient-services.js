var patientModule = angular.module('patientModule', ['ui.bootstrap','angular-rtcomm','healthcareModule','ngAnimate']);

patientModule.factory('PatientService',function ($rootScope, $log, $http,  HealthcareService) {
	var agentCall = { visible: false};
	var user = HealthcareService.user;
	return {
			user: user,
      agentCall: agentCall,
      setVisible: function(v) {
      	agentCall.visible= v;
      }
  };
});

