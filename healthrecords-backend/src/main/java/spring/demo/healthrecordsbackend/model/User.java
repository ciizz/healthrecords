package spring.demo.healthrecordsbackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User
{

  @Transient
  public static final String SEQUENCE_NAME = "users_sequence";

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //User Attributes
  @Id
  private long id;
  private String firstName;
  private String lastName;
  private String dob;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public User(long aId, String aFirstName, String aLastName, String aDob)
  {
    id = aId;
    firstName = aFirstName;
    lastName = aLastName;
    dob = aDob;
  }

  //------------------------
  // INTERFACE
  //------------------------

  public boolean setId(long aId)
  {
    boolean wasSet = false;
    id = aId;
    wasSet = true;
    return wasSet;
  }

  public boolean setFirstName(String aFirstName)
  {
    boolean wasSet = false;
    firstName = aFirstName;
    wasSet = true;
    return wasSet;
  }

  public boolean setLastName(String aLastName)
  {
    boolean wasSet = false;
    lastName = aLastName;
    wasSet = true;
    return wasSet;
  }

  public boolean setDob(String aDob)
  {
    boolean wasSet = false;
    dob = aDob;
    wasSet = true;
    return wasSet;
  }

  public long getId()
  {
    return id;
  }

  public String getFirstName()
  {
    return firstName;
  }

  public String getLastName()
  {
    return lastName;
  }

  public String getDob()
  {
    return dob;
  }

  public void delete()
  {}


  public String toString()
  {
    return super.toString() + "["+
            "id" + ":" + getId()+ "," +
            "firstName" + ":" + getFirstName()+ "," +
            "lastName" + ":" + getLastName()+ "," +
            "dob" + ":" + getDob()+ "]";
  }
}