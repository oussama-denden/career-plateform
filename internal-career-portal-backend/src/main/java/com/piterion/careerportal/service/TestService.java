package com.piterion.careerportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.piterion.careerportal.model.TestModel;
import com.piterion.careerportal.repository.TestRepository;

@Service("testService")
public class TestService {

	@Autowired
	private TestRepository testRepository;

	public TestModel getTest() {
		return testRepository.save(new TestModel("test"));
	}
}
