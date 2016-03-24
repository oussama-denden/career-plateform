package com.piterion.careerportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.piterion.careerportal.model.TestModel;
import com.piterion.careerportal.service.TestService;

@Controller
public class TestController {

	@Autowired
	private TestService testService;

	@RequestMapping(value = "/ws", method = RequestMethod.GET)
	@ResponseBody
	public TestModel getTest() {
		System.out.println("received");
		return testService.getTest();
	}

}
