package spring.demo.healthrecordsbackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import spring.demo.healthrecordsbackend.model.Admin;

public interface AdminRepository extends MongoRepository<Admin, Integer> {

}
