doctorModule.controller('VideoOnlyModalCtrl', function($scope, $log, $modal, RtcommService ) {
	var videoModal = null;
	
	$scope.activeEndpoint = RtcommService.getActiveEndpoint();
	$scope.isAVConnected = RtcommService.isWebrtcConnected($scope.activeEndpoint);
	
	$scope.$on('webrtc:connected', function (event, eventObject) {
   		if ($scope.epCtrlActiveEndpointUUID == eventObject.endpoint.id)
			$scope.isAVConnected = true; 
   	});
   	
   	$scope.$on('webrtc:disconnected', function (event, eventObject) {
   		if ($scope.activeEndpoint == eventObject.endpoint.id)
			$scope.isAVConnected = false; 
   	});
	
   	$scope.$on('endpointActivated', function (event, endpointUUID) {
		$scope.activeEndpoint = endpointUUID;
		$scope.isAVConnected = RtcommService.isWebrtcConnected(endpointUUID);
   	});
   	
   	$scope.$on('noEndpointActivated', function (event) {
		$scope.isAVConnected = false; 
   	});

	$scope.open = function() {
		$log.info('VideoOnlyModalCtrl: open');
		videoModal = $modal.open({
			templateUrl: '../templates/doctor/video-only-modal.html',
			controller: 'VideoOnlyModalInstanceCtrl',
			size:'lg',
			backdrop:'static',
			resolve: {
			}
		});
		
		videoModal.opened.then(function(){
		});
	};
});

doctorModule.controller('VideoOnlyModalInstanceCtrl', function($scope, $modalInstance, $log, RtcommService) {
	$scope.modalHeader = "Patient View";

	$scope.info = function() {
		$log.info('myScope', $scope);
		$log.info('parentScope',$scope.$parent);
	};
	
	$scope.close = function() {
		$modalInstance.dismiss('cancel');
		RtcommService.setDefaultViewSelector();	//	Set the view selector back to the default.
		RtcommService.setVideoView(); // Reset the video view to the active endpoint.
	};
});


