package spring.demo.healthrecordsbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class HealthrecordsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthrecordsBackendApplication.class, args);
	}

}
