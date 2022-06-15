package spring.demo.healthrecordsbackend.services;

import spring.demo.healthrecordsbackend.dao.AdminRepository;
import spring.demo.healthrecordsbackend.dao.ClientRepository;
import spring.demo.healthrecordsbackend.dao.UserRepository;
import spring.demo.healthrecordsbackend.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ClientServices {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    AdminRepository adminRepository;


    public Client createClient(String aFirstName,
                               String aLastName,
                               String aDob,
                               String aDoctorFirstName,
                               String aDoctorLastName,
                               int aDoctorPhoneNumber,
                               boolean aAllergies,
                               boolean aDiabetes,
                               boolean aHighBloodPressure) {

//        long id = NextSequenceService.getNextSequence("customSequences");
        long id = clientRepository.count();
        Client client = new Client(
                id,
                aFirstName,
                aLastName,
                aDob,
                aDoctorFirstName,
                aDoctorLastName,
                aDoctorPhoneNumber,
                aAllergies,
                aDiabetes,
                aHighBloodPressure);
        clientRepository.save(client);

        return client;
    }

    public Optional<Client> getClientInfo(long id) {
        Optional<Client> client = clientRepository.findById(id);
        return client;
    }
}
