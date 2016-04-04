package com.piterion.careerportal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.piterion.careerportal.controller")
public class WebConfig {

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins(
						"http://localhost:8090");
				registry.addMapping("/offer/*").allowedOrigins(
						"http://localhost:8090");
				registry.addMapping("/user/**").allowedOrigins(
						"http://localhost:8090");
				registry.addMapping("/offer/*/referral").allowedOrigins(
						"http://localhost:8090");
				registry.addMapping("/offer/*/interest").allowedOrigins(
						"http://localhost:8090");
			}
		};
	}

}
