package com.piterion.careerportal.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.piterion.careerportal.model.Interest;
import com.piterion.careerportal.model.Offer;
import com.piterion.careerportal.model.Referral;
import com.piterion.careerportal.model.business.InterestBusiness;
import com.piterion.careerportal.model.business.OfferBusiness;
import com.piterion.careerportal.model.business.ReferralBusiness;
import com.piterion.careerportal.repository.OfferRepository;
import com.piterion.careerportal.service.OfferService;

@Service("offerService")
public class OfferServiceImpl implements OfferService {

	@Autowired
	private OfferRepository offerRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public HashMap<String, List<OfferBusiness>> getAllOffers() {
		List<Offer> allOffers = offerRepository.findAll();
		List<OfferBusiness> germanyProjects = new ArrayList<>();
		List<OfferBusiness> indiaProjects = new ArrayList<>();
		for (Offer offer : allOffers) {
			switch (offer.getCountry()) {
			case "Germany":
				germanyProjects.add(mapper.map(offer, OfferBusiness.class));
				break;
			case "India":
				indiaProjects.add(mapper.map(offer, OfferBusiness.class));
				break;
			default:
				break;
			}

		}

		HashMap<String, List<OfferBusiness>> Offers = new HashMap<>();
		Offers.put("Germany", germanyProjects);
		Offers.put("India", indiaProjects);
		return Offers;
	}

	@Override
	public OfferBusiness getOffer(Long id) {
		Offer offer = offerRepository.findOne(id);
		return mapper.map(offer, OfferBusiness.class);
	}

	@Override
	public Long addOffer(OfferBusiness offerBusiness) {
		Offer offer = mapper.map(offerBusiness, Offer.class);
		return offerRepository.save(offer).getId();
	}

	@Override
	public void addReferral(Long offerId, ReferralBusiness referralBusiness) {
		Offer offer = offerRepository.findOne(offerId);
		Referral referral = mapper.map(referralBusiness, Referral.class);
		offer.addReferral(referral);
		offerRepository.save(offer);
	}

	@Override
	public Long showInterest(Long offerId, InterestBusiness interestBusiness) {
		Offer offer = offerRepository.findOne(offerId);
		Interest interest = mapper.map(interestBusiness, Interest.class);
		offer.addInterest(interest);
		offerRepository.save(offer);
		return interest.getId();
	}

}
