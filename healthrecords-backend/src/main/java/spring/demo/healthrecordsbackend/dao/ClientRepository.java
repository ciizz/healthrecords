package spring.demo.healthrecordsbackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import spring.demo.healthrecordsbackend.model.Client;

public interface ClientRepository extends MongoRepository<Client, Long> {

    Client findClientById(long id);

}
