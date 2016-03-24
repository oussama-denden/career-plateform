package com.piterion.careerportal.service;

import java.util.HashMap;
import java.util.List;

import com.piterion.careerportal.model.business.ProjectBusiness;

public interface ProjectService {

	HashMap<String, List<ProjectBusiness>> getAllProjects();
}
