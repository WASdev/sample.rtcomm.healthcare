/**
 * 
 */

var healthcare = (function(){
		
	function logout() {
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

	return {
		logout : logout,
	}
		
})();