package spring.demo.healthrecordsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spring.demo.healthrecordsbackend.model.Client;
import spring.demo.healthrecordsbackend.services.ClientServices;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class HealthrecordsBackendController {

    @Autowired
    private ClientServices clientServices;


    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }


    @PostMapping("/newclient")
    public Client createNewClient(@RequestParam String firstName,
                                  String lastName,
                                  String dob,
                                  String doctorFirstName,
                                  String doctorLastName,
                                  int doctorPhoneNumber,
                                  boolean allergies,
                                  boolean diabetes,
                                  boolean highBloodPressure){
        Client client = clientServices.createClient(
                firstName,
                lastName,
                dob,
                doctorFirstName,
                doctorLastName,
                doctorPhoneNumber,
                allergies,
                diabetes,
                highBloodPressure);

        return client;
    }

    @GetMapping("/client")
    public Client getClientInfo(@RequestParam int id) {
        return clientServices.getClientInfo(id);
    }

}