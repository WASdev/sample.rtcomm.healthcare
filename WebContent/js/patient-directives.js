patientModule.directive('agentConnect', ['RtcommService', '$log', function(RtcommService, $log){
	return {
		restrict: 'E',
		templateUrl: '../templates/patient/agent-connect.html',
		link: function(scope, element, attrs){
			$log.info('Running the link function...');
		}
	};
}]);

patientModule.directive('patientInfo', function(PatientService){
	return {
		restrict: 'E',
		templateUrl: '../templates/patient/patient-info.html',
		link: function(scope, element, attrs){
			
		},
		controller: function($scope) {
			$scope.user = PatientService.user;
			$scope.attributes = PatientService.attributes;
			$scope.links = PatientService.links;
		}
	};
});


