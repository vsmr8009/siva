package com.cts.training.msms;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MedicalStoreManagementSystemApplication extends SpringBootServletInitializer {
	
	private static final Logger LOGGER = LogManager.getLogger(MedicalStoreManagementSystemApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(MedicalStoreManagementSystemApplication.class, args);
		LOGGER.info("Main application started you can access modules now..");
		
	}

}
