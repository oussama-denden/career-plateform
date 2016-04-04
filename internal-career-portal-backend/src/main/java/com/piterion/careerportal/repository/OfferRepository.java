package com.piterion.careerportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.piterion.careerportal.model.Offer;

@Repository("offerRepository")
public interface OfferRepository extends JpaRepository<Offer, Long> {

}
