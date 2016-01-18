var healthcareModule = angular.module('healthcareModule', ['ui.bootstrap','angular-rtcomm']);

/**
 * Set debugEnaled to true to enable the debug messages in this rtcomm angule module.
*/
healthcareModule.config(function($logProvider){
	  $logProvider.debugEnabled(true);
	});

healthcareModule.factory('HealthcareService',function ($rootScope, $log, $location,$window, RtcommService) {
	
	var user = { id: null};
		$rootScope.$on('rtcomm::init',function(event,success,details) {
			user.id = details.userid;
		});
	
	return {
		user: user,
		
		getUserID: function() {
			return user.id;
		},
		
		logout : 	function logout() {
		    // The rest of this code assumes you are not using a library.
		    // It can be made less wordy if you use one.
		    var form = document.createElement("form");
		    form.setAttribute("method", "post");
		    form.setAttribute("name", "logout");
		    form.setAttribute("action", "ibm_security_logout");
	
		    var hiddenField = document.createElement("input");
		    hiddenField.setAttribute("type", "hidden");
		    hiddenField.setAttribute("name", "logoutExitPage");
		    hiddenField.setAttribute("value","/index.html");
		    form.appendChild(hiddenField);
		    document.body.appendChild(form);
		    form.submit();
		}
		
	};

}); 


