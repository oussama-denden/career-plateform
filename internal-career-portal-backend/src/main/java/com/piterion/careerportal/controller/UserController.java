package com.piterion.careerportal.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.piterion.careerportal.exception.InfoErreur;
import com.piterion.careerportal.exception.PitCPException;
import com.piterion.careerportal.model.business.Credentials;
import com.piterion.careerportal.model.business.PortalUserBusiness;
import com.piterion.careerportal.service.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public PortalUserBusiness login(@RequestBody Credentials credentials)
			throws PitCPException {
		System.out.println("logging in");
		return userService.login(credentials);

	}

	@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
	@ExceptionHandler({ PitCPException.class })
	@ResponseBody
	InfoErreur handleTopazeException(HttpServletRequest req, Exception ex) {
		return new InfoErreur(req.getRequestURI(),
				((PitCPException) ex).getErrorCode(), ex.getLocalizedMessage());
	}

}
