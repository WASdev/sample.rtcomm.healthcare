doctorModule.directive('patientForm', ['DoctorService', '$log', function(RtcommService, $log) {
    return {
      restrict: 'E',
      templateUrl: '../templates/doctor/patient-form.html',
      controller: function ($scope) {
    	  
			$scope.attributes = [];
			$scope.links = [];
			$scope.sessionID = null;

			$scope.submit = function() {
			};
			
			$scope.$on('new-active-session', function (event, patientID, sessionID, attributes, links) {
				$scope.attributes = attributes;
				$scope.links = links;
				$scope.sessionID = sessionID;
			});

			$scope.$on('no-active-session', function (event, patientID, sessionID, attributes, links) {
				$scope.attributes = [];
				$scope.links = [];
				$scope.sessionID = null;
			});
      },
      controllerAs: 'form'
    };
}]);
