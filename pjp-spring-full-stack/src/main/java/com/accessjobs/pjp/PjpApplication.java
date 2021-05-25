package com.accessjobs.pjp;

import com.accessjobs.pjp.fileservice.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication
//@ConfigurationPropertiesScan
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class PjpApplication {

		@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder(){
			return new BCryptPasswordEncoder();
		}
	public static void main(String[] args) {
		SpringApplication.run(PjpApplication.class, args);
	}

}
