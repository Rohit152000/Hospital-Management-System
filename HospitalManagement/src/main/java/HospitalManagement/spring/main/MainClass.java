package HospitalManagement.spring.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "HospitalManagement")
@EnableJpaRepositories(basePackages = "HospitalManagement")
@EntityScan(basePackages = "HospitalManagement")
public class MainClass
{

	public static void main(String[] args) {
		SpringApplication.run(MainClass.class, args);
	}

}
