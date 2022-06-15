package spring.demo.healthrecordsbackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customSequences")
public class CustomSequences {
    @Id
    private String id;
    private int seq;

    public String getId() {
        return id;
    }

    public int getSeq() {
        return seq;
    }

}