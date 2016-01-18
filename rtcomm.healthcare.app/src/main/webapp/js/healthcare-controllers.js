healthcareModule.controller("UserController", function($scope, HealthcareService, RtcommService, $log) {
	 	$scope.user= HealthcareService.user;
		$scope.logout = HealthcareService.logout;
});

