package com.ibm.ws.hcare;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ibm.json.java.JSONObject;
import com.ibm.websphere.security.web.WebSecurityHelper;

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
			System.out.println ("HCareIdentity: doGet: token = " + getSecurityTokenLiberty());
			JSONObject messageObject = new JSONObject();
			messageObject.put("userid", principal.getName());
			messageObject.put("ltpaToken", getSecurityTokenLiberty());
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
	
	/*
	*  Sample code to retrieve LTPA token on the IBM WebSphere Liberty Profile */
	/* @return an LTPA token */
	public  String getSecurityTokenLiberty() {
		Cookie cookie = null;
		String token = null;
		try {
			cookie = WebSecurityHelper.getSSOCookieFromSSOToken();
			if (cookie != null) {
				token = cookie.getValue();
			}
		} catch (Exception e) {
			token = "no token found";
			e.printStackTrace();
		}
		return token;
	}
	
	
	
}
