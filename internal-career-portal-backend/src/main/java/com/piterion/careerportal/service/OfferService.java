package com.piterion.careerportal.service;

import java.util.HashMap;
import java.util.List;

import com.piterion.careerportal.model.business.InterestBusiness;
import com.piterion.careerportal.model.business.OfferBusiness;
import com.piterion.careerportal.model.business.ReferralBusiness;

public interface OfferService {

	public HashMap<String, List<OfferBusiness>> getAllOffers();

	public OfferBusiness getOffer(Long id);

	public Long addOffer(OfferBusiness offerBusiness);
	
	public void addReferral(Long offerId, ReferralBusiness referralBusiness);
	
	public Long showInterest(Long offerId, InterestBusiness interestBusiness);
}
