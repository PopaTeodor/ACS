package hello;

import java.util.List;
import java.util.ArrayList;

public class Masina {
	
  private int id;  
  private String name;
 

  public Masina(int id, String name) {
      this.id = id;
	  this.name = name;
      
  }

  public String getName() {
      return this.name;
  }

  public int getId() {
    return this.id;
  }
}
