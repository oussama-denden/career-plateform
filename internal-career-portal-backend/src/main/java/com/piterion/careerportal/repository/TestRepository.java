package com.piterion.careerportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.piterion.careerportal.model.TestModel;

@Repository("testRepository")
public interface TestRepository extends JpaRepository<TestModel, Long> {

}
