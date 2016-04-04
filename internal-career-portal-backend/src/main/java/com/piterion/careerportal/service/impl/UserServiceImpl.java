package com.piterion.careerportal.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.piterion.careerportal.exception.PitCPException;
import com.piterion.careerportal.model.PortalUser;
import com.piterion.careerportal.model.business.Credentials;
import com.piterion.careerportal.model.business.PortalUserBusiness;
import com.piterion.careerportal.repository.UserRepository;
import com.piterion.careerportal.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public PortalUserBusiness login(Credentials credentials) throws PitCPException {
		PortalUser user = userRepository.findByUsernameAndPassword(
				credentials.getUsername(), credentials.getPassword());
		if (user == null) {
			throw new PitCPException("Bad Credentials", "0");
		}
		return mapper.map(user, PortalUserBusiness.class);
	}

}
