package com.piterion.careerportal.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.piterion.careerportal.model.Project;
import com.piterion.careerportal.model.business.ProjectBusiness;
import com.piterion.careerportal.repository.ProjectRepository;
import com.piterion.careerportal.service.ProjectService;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Override
	public HashMap<String, List<ProjectBusiness>> getAllProjects() {
		List<Project> allProjects = projectRepository.findAll();
		ModelMapper mapper = new ModelMapper();
		List<ProjectBusiness> germanyProjects = new ArrayList<>();
		List<ProjectBusiness> indiaProjects = new ArrayList<>();
		for (Project project : allProjects) {
			switch (project.getCountry()) {
			case "Germany":
				germanyProjects.add(mapper.map(project, ProjectBusiness.class));
				break;
			case "India":
				indiaProjects.add(mapper.map(project, ProjectBusiness.class));
				break;
			default:
				break;
			}

		}

		HashMap<String, List<ProjectBusiness>> projects = new HashMap<>();
		projects.put("Germany", germanyProjects);
		projects.put("India", indiaProjects);
		return projects;
	}
}
