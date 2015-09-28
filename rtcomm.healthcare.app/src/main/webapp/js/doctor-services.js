var doctorModule = angular.module('doctorModule', ['ui.bootstrap','angular-rtcomm','healthcareModule']);

doctorModule.factory('DoctorService',function ($rootScope, $log, $http,RtcommService) {
	
	var sessionAttributes = {};
	var sessionLinks = {};
	var activeSessionID = null;
	
	$log.info('DoctorService: setup...');

	
	$rootScope.$on('session:started', function (event, eventObject) {
        pullAttributes(eventObject.endpoint.getRemoteEndpointID(),eventObject.endpoint.id);
    });

	$rootScope.$on('session:stopped', function (event, eventObject) {
		if (typeof sessionLinks[eventObject.endpoint.id] != undefined){
			delete sessionLinks[eventObject.endpoint.id];
			delete sessionAttributes[eventObject.endpoint.id];
		}
    });
	
	$rootScope.$on('endpointActivated', function (event, endpointUUID) {
		if (typeof sessionLinks[endpointUUID] != undefined){
		 	 $rootScope.$evalAsync(function () {$rootScope.$broadcast(	'new-active-session', 
		 			 	RtcommService.getEndpoint(endpointUUID).getRemoteEndpointID(), 
						endpointUUID, 
						sessionAttributes[endpointUUID],
						sessionLinks[endpointUUID]);});
		}
    });
  	
	$rootScope.$on('noEndpointActivated', function (event) {
   		sessionAttributes = {};
   		sessionLinks = {};
	 	$rootScope.$evalAsync(function () {$rootScope.$broadcast('no-active-session');});
   	});

	var pullAttributes = function(remoteEndpointID, sessionID) {
		var endpointAttributesURL = "../records/" + remoteEndpointID + ".json";
		$log.info('DoctorService: getting attributes at: ' + endpointAttributesURL);
		
		$http.get(endpointAttributesURL).success (function(data){
			activeSessionID = sessionID;
			sessionAttributes[sessionID] = data.attributes;
			sessionLinks[sessionID] = data.links;
			
		 	 $rootScope.$evalAsync(function () {$rootScope.$broadcast(	'new-active-session', 
		 			 													remoteEndpointID, 
		 			 													sessionID, 
		 			 													sessionAttributes[sessionID],
		 			 													sessionLinks[sessionID]);});
		}).error(function(data, status, headers, config) {
			$log.info('DoctorService: error accessing attributes: ' + status);
		});
	};
	
	return {
		
		getSessionAttribute : function (sessionID){
			
			if (typeof sessionID != "undefined" && sessionID != null)
				return (sessionAttributes[sessionID]);
			else
				return (sessionAttributes[activeSessionID]);
		}
  };
}); 

