package spring.demo.healthrecordsbackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import spring.demo.healthrecordsbackend.model.User;

public interface UserRepository extends MongoRepository<User, Integer> {

}
