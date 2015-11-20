package hello;

import java.util.List;
import java.util.ArrayList;

public class Masina {
	
  private String name;
  private int id;
  private int putere;
  
  public Persoana() {}

  public Persoana(int id, String name) {
      this.name = name;
      this.id = id;
	  this.putere = putere;
  }

  public String getName() {
      return this.name;
  }

  public int getId() {
    return this.id;
  }
  
  public int getPutere() {
    return this.putere;
  }
}