package com.piterion.careerportal.model.business;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.piterion.careerportal.model.business.deserializer.DateDeserializer;

public class InterestBusiness {
	
	@JsonDeserialize(using = DateDeserializer.class)
	private Date availabilityFrom;
	
	@JsonDeserialize(using = DateDeserializer.class)
	private Date availabilityTo;
	
	private Boolean haveVisa;
	
	private String cv;
	
	private String teamLeader;
	
	private String currentProject;
	
	public InterestBusiness() {
		// TODO Auto-generated constructor stub
	}

	public Date getAvailabilityFrom() {
		return availabilityFrom;
	}

	public void setAvailabilityFrom(Date availabilityFrom) {
		this.availabilityFrom = availabilityFrom;
	}

	public Date getAvailabilityTo() {
		return availabilityTo;
	}

	public void setAvailabilityTo(Date availabilityTo) {
		this.availabilityTo = availabilityTo;
	}

	public Boolean getHaveVisa() {
		return haveVisa;
	}

	public void setHaveVisa(Boolean haveVisa) {
		this.haveVisa = haveVisa;
	}

	public String getCv() {
		return cv;
	}

	public void setCv(String cv) {
		this.cv = cv;
	}

	public String getTeamLeader() {
		return teamLeader;
	}

	public void setTeamLeader(String teamLeader) {
		this.teamLeader = teamLeader;
	}

	public String getCurrentProject() {
		return currentProject;
	}

	public void setCurrentProject(String currentProject) {
		this.currentProject = currentProject;
	}

}
