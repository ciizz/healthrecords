package spring.demo.healthrecordsbackend.model;
/*This code was generated using the UMPLE 1.31.1.5860.78bb27cc6 modeling language!*/

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Admin extends User
{

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public Admin(int aId, String aFirstName, String aLastName, String aDob)
  {
    super(aId, aFirstName, aLastName, aDob);
  }

  //------------------------
  // INTERFACE
  //------------------------

  public void delete()
  {
    super.delete();
  }

}