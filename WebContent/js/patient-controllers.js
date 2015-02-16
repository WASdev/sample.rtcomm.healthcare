patientModule.controller("CallAgentCtrl", function($scope, $log, PatientService, HealthcareService, RtcommService) {
	$scope.agent = PatientService.agentCall;
	$scope.queue = null;
	
	$scope.init = function(queue){
		$scope.queue = queue || $scope.queue;
		$log.info('Queue to call: '+queue);
	};
	
	$scope.visible=PatientService.agentCallVisible;
	
	$scope.enableCall = false;
	
   $scope.$on('rtcomm::init', function (event, success, details) {
		$log.debug('RtcommCallModalController: rtcomm::init: success = ' + success);
        
		if (success == true)
           $scope.enableCallModel = true;
		else
           $scope.enableCallModel = false;
  });

  $scope.$on('session:started', function (event, eventObject) {
      $scope.enableCallModel = false;
    });

  $scope.$on('session:stopped', function (event, eventObject) {
      $scope.enableCallModel = true;
      PatientService.setVisible(false);
  });
  
  $scope.placeCall = function (queue){
	  var callee = queue || $scope.queue;
	  if (callee) {
	  	$log.info('Calling '+callee);
	  	PatientService.setVisible(true);
	  	$log.info('Changing VISIBLE! '+ $scope.agent.visible);
	  	console.log('PatientService', PatientService);
	  	$log.info('Changing VISIBLE! ps? '+PatientService.agentCall.visible);
	  	RtcommService.placeCall(callee,['chat']);
	  } else {
	  	$log.error('No callee specified...');
	  }
	};
});

patientModule.controller('CallModalCtrl', function($scope, $log, $modal, RtcommService ) {
	var videoModal = null;

	$scope.open = function() {
		videoModal = $modal.open({
			templateUrl: '../templates/patient/videoModal.html',
			controller: 'CallModalInstanceCtrl',
			size:'lg',
			backdrop:'static',
			resolve: {
				uuid: function() {
					$log.info('resolve uuid called');
					return $scope.uuid;
				},
				endpoint: function() {
					return $scope.endpoint;
				}
			}
		});
		
		videoModal.opened.then(function(){
			// On Open, place the call...
			RtcommService.placeCall("Healthcare Doctors", ['chat']);
		});
	};
});

patientModule.controller('CallModalInstanceCtrl', function($scope, $modalInstance, $log, RtcommService,uuid) {
	$scope.modalHeader = "Call a Doctor";

	$scope.info = function() {
		$log.info('myScope', $scope);
		$log.info('parentScope',$scope.$parent);
		$log.info('uuid?',$scope.uuid);
	};
	
	$scope.close = function() {
		$log.info('UUID --> '+uuid);
		
		var endpoint = RtcommService.getEndpoint(RtcommService.getActiveEndpoint());
		if (typeof endpoint !== "undefined" && endpoint != null)
			endpoint.disconnect();
		
		$modalInstance.dismiss('cancel');
	};
});




