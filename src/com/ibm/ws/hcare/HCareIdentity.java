package com.ibm.ws.hcare;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ibm.json.java.JSONObject;

/**
 * Servlet implementation class HCareIdentity
 */
@WebServlet("/HCareIdentity")
public class HCareIdentity extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Principal principal = request.getUserPrincipal();
		
		if (principal != null){
			System.out.println ("HCareIdentity: doGet: user name = " + principal.getName());
			
			JSONObject messageObject = new JSONObject();
			messageObject.put("userid", principal.getName());
	
			response.setContentType("application/javascript");
			response.setCharacterEncoding( "UTF-8" );
			PrintWriter out = response.getWriter();
			out.write(messageObject.serialize());
		    out.close();
		}
		else{
			System.out.println ("HCareIdentity: doGet: ERROR: user name = null");
		}
	}
}
