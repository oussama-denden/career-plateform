package com.piterion.careerportal.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Interest {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private Date availabilityFrom;
	
	private Date availabilityto;
	
	private Boolean haveVisa;
	
	private String cv;
	
	private String teamLeader;
	
	private String currentProject;
	
	public Interest() {
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getAvailabilityFrom() {
		return availabilityFrom;
	}

	public void setAvailabilityFrom(Date availabilityFrom) {
		this.availabilityFrom = availabilityFrom;
	}

	public Date getAvailabilityto() {
		return availabilityto;
	}

	public void setAvailabilityto(Date availabilityto) {
		this.availabilityto = availabilityto;
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
