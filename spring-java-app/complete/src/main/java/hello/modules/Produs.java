package hello;

import java.util.List;
import java.util.ArrayList;

public class Produs {
	
  private int price;
  private int id;
  private String name;

  public Persoana() {}

  public Persoana(int id, int price,String name) {
      this.name = name;
      this.id = id;
	  this.price = price;
  }

  public String getName() {
      return this.name;
  }

  public int getId() {
    return this.id;
  }
  
  public int getPrice() {
    return this.price;
  }
}