package com.piterion.careerportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.piterion.careerportal.model.PortalUser;

@Repository("userRepositoryer")
public interface UserRepository extends JpaRepository<PortalUser, Long> {

	PortalUser findByUsernameAndPassword(String username, String password);
}
