package com.piterion.careerportal.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Offer {

	@Id
	@GeneratedValue
	private Long id;

	private String title;
	
	private String link;
	
	private String salesManager;
	
	private String hrResponsible;
	
	private String teamLeader;
	
	private String visibility;
	
	private Boolean anu;
	
	private String employer;
	
	private String category;
	
	private String description;

	private String country;

	private String city;

	private Date startDate;
	
	private String period;

	private String skills;

	private String probability;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "offerId")
	private Set<Referral> referrals = new HashSet<Referral>();
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "offerId")
	private Set<Interest> interests = new HashSet<Interest>();


	public Offer() {
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public String getSalesManager() {
		return salesManager;
	}


	public void setSalesManager(String salesManager) {
		this.salesManager = salesManager;
	}


	public String getHrResponsible() {
		return hrResponsible;
	}


	public void setHrResponsible(String hrResponsible) {
		this.hrResponsible = hrResponsible;
	}


	public String getTeamLeader() {
		return teamLeader;
	}


	public void setTeamLeader(String teamLeader) {
		this.teamLeader = teamLeader;
	}


	public String getVisibility() {
		return visibility;
	}


	public void setVisibility(String visibility) {
		this.visibility = visibility;
	}


	public Boolean getAnu() {
		return anu;
	}


	public void setAnu(Boolean anu) {
		this.anu = anu;
	}


	public String getEmployer() {
		return employer;
	}


	public void setEmployer(String employer) {
		this.employer = employer;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public Date getStartDate() {
		return startDate;
	}


	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}


	public String getPeriod() {
		return period;
	}


	public void setPeriod(String period) {
		this.period = period;
	}


	public String getSkills() {
		return skills;
	}


	public void setSkills(String skills) {
		this.skills = skills;
	}


	public String getProbability() {
		return probability;
	}


	public void setProbability(String probability) {
		this.probability = probability;
	}


	public Set<Referral> getReferrals() {
		return referrals;
	}


	public void setReferrals(Set<Referral> referrals) {
		this.referrals = referrals;
	}
	
	public void addReferral(Referral referral){
		this.referrals.add(referral);
	}


	public Set<Interest> getInterests() {
		return interests;
	}


	public void setInterests(Set<Interest> interests) {
		this.interests = interests;
	}
	
	public void addInterest(Interest interest){
		this.interests.add(interest);
	}

	

}
