package com.piterion.careerportal.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.piterion.careerportal.model.business.InterestBusiness;
import com.piterion.careerportal.model.business.OfferBusiness;
import com.piterion.careerportal.model.business.ReferralBusiness;
import com.piterion.careerportal.service.OfferService;

@RestController
@RequestMapping(value = "/offer")
public class OfferController {

	@Autowired
	private OfferService offerService;

	@RequestMapping(method = RequestMethod.GET)
	public HashMap<String, List<OfferBusiness>> getAllOffers() {
		System.out.println("Getting All Offers");
		return offerService.getAllOffers();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public OfferBusiness getProject(@PathVariable Long id) {
		System.out.println("Getting Offer with Id: " + id);
		return offerService.getOffer(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Long addProject(@RequestBody OfferBusiness offerBusiness) {
		System.out.println("Adding new Offer");
		return offerService.addOffer(offerBusiness);
	}
	
	@RequestMapping(value = "/{offerId}/referral", method = RequestMethod.POST)
	public Long addReferral(@PathVariable Long offerId, @RequestBody ReferralBusiness referralBusiness){
		System.out.println("Referring a person for offer with id: " + offerId);
		offerService.addReferral(offerId, referralBusiness);
		return 0l;
	}
	
	@RequestMapping(value = "/{offerId}/interest", method = RequestMethod.POST)
	public Long showInterest(@PathVariable Long offerId, @RequestBody InterestBusiness interestBusiness){
		System.out.println("Showing Interest for offer with id: " + offerId);
		offerService.showInterest(offerId, interestBusiness);
		return 0l;
	}
	

}
