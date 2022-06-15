package spring.demo.healthrecordsbackend.model;
/*This code was generated using the UMPLE 1.31.1.5860.78bb27cc6 modeling language!*/

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Client extends User
{

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //Client Attributes
  private String doctorFirstName;
  private String doctorLastName;
  private long doctorPhoneNumber;
  private boolean allergies;
  private boolean diabetes;
  private boolean highBloodPressure;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public Client(long id, String firstName, String lastName, String dob, String doctorFirstName, String doctorLastName, long doctorPhoneNumber, boolean allergies, boolean diabetes, boolean highBloodPressure)
  {
    super(id, firstName, lastName, dob);
    this.doctorFirstName = doctorFirstName;
    this.doctorLastName = doctorLastName;
    this.doctorPhoneNumber = doctorPhoneNumber;
    this.allergies = allergies;
    this.diabetes = diabetes;
    this.highBloodPressure = highBloodPressure;
  }

  //------------------------
  // INTERFACE
  //------------------------

  public boolean setDoctorFirstName(String aDoctorFirstName)
  {
    boolean wasSet = false;
    doctorFirstName = aDoctorFirstName;
    wasSet = true;
    return wasSet;
  }

  public boolean setDoctorLastName(String aDoctorLastName)
  {
    boolean wasSet = false;
    doctorLastName = aDoctorLastName;
    wasSet = true;
    return wasSet;
  }

  public boolean setDoctorPhoneNumber(long aDoctorPhoneNumber)
  {
    boolean wasSet = false;
    doctorPhoneNumber = aDoctorPhoneNumber;
    wasSet = true;
    return wasSet;
  }

  public boolean setAllergies(boolean aAllergies)
  {
    boolean wasSet = false;
    allergies = aAllergies;
    wasSet = true;
    return wasSet;
  }

  public boolean setDiabetes(boolean aDiabetes)
  {
    boolean wasSet = false;
    diabetes = aDiabetes;
    wasSet = true;
    return wasSet;
  }

  public boolean setHighBloodPressure(boolean aHighBloodPressure)
  {
    boolean wasSet = false;
    highBloodPressure = aHighBloodPressure;
    wasSet = true;
    return wasSet;
  }

  public String getDoctorFirstName()
  {
    return doctorFirstName;
  }

  public String getDoctorLastName()
  {
    return doctorLastName;
  }

  public long getDoctorPhoneNumber()
  {
    return doctorPhoneNumber;
  }

  public boolean getAllergies()
  {
    return allergies;
  }

  public boolean getDiabetes()
  {
    return diabetes;
  }

  public boolean getHighBloodPressure()
  {
    return highBloodPressure;
  }

  public void delete()
  {
    super.delete();
  }


  public String toString()
  {
    return super.toString() + "["+
            "doctorFirstName" + ":" + getDoctorFirstName()+ "," +
            "doctorLastName" + ":" + getDoctorLastName()+ "," +
            "doctorPhoneNumber" + ":" + getDoctorPhoneNumber()+ "," +
            "allergies" + ":" + getAllergies()+ "," +
            "diabetes" + ":" + getDiabetes()+ "," +
            "highBloodPressure" + ":" + getHighBloodPressure()+ "]";
  }
}