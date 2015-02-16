patientModule.directive('agentConnect', ['RtcommService', '$log', function(RtcommService, $log){
	return {
		restrict: 'E',
		templateUrl: '../templates/patient/agent-connect.html',
		link: function(scope, element, attrs){
			$log.info('Running the link function...');
		}
	};
}]);
