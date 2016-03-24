package com.piterion.careerportal.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.piterion.careerportal.model.business.ProjectBusiness;
import com.piterion.careerportal.service.ProjectService;

@RestController
@RequestMapping(value = "/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@RequestMapping(method = RequestMethod.GET)
	public HashMap<String, List<ProjectBusiness>> getAllProjects() {
		System.out.println("Getting All Projects");
		return projectService.getAllProjects();
	}

}
