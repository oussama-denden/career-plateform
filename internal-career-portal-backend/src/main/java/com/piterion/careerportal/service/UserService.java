package com.piterion.careerportal.service;

import com.piterion.careerportal.exception.PitCPException;
import com.piterion.careerportal.model.business.Credentials;
import com.piterion.careerportal.model.business.PortalUserBusiness;

public interface UserService {

	PortalUserBusiness login(Credentials credentials) throws PitCPException;

}
