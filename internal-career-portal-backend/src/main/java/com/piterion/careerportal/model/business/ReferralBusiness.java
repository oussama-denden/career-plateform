package com.piterion.careerportal.model.business;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.piterion.careerportal.model.business.deserializer.DateDeserializer;

public class ReferralBusiness {
	
private String name;
	
	private String email;
	
	private String haveVisa;
	
	private String gendre;
	
	@JsonDeserialize(using = DateDeserializer.class)
	private Date dateOfBirth;
	
	private String placeOfBirth;
	
	private String currentDesignation;
	
	private String comments;
	
	public ReferralBusiness() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getHaveVisa() {
		return haveVisa;
	}

	public void setHaveVisa(String haveVisa) {
		this.haveVisa = haveVisa;
	}

	public String getGendre() {
		return gendre;
	}

	public void setGendre(String gendre) {
		this.gendre = gendre;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getPlaceOfBirth() {
		return placeOfBirth;
	}

	public void setPlaceOfBirth(String placeOfBirth) {
		this.placeOfBirth = placeOfBirth;
	}

	public String getCurrentDesignation() {
		return currentDesignation;
	}

	public void setCurrentDesignation(String currentDesignation) {
		this.currentDesignation = currentDesignation;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

}
