package hello;

import java.util.List;
import java.util.ArrayList;

public class Racheta {
	
	private int id;
    private String name;
	private int distance;


  public Racheta(int id, String name,int distance) {
      this.name = name;
      this.id = id;
	  this.distance = distance;
  }
  public Racheta () {}

  public String getName() {
      return this.name;
  }

  public int getId() {
    return this.id;
  }
  
    public int getDistance() {
    return this.distance;
  }
}
