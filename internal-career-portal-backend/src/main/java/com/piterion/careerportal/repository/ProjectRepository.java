package com.piterion.careerportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.piterion.careerportal.model.Project;

@Repository("projectRepository")
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
