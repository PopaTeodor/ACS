package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.ArrayList;


@RestController
public class ProdusController {
  private List<Produs> produse = new ArrayList<Produs>();

  ProdusController() {
    Produs p1 = new Produs(1, "Lapte");
    Produs p2 = new Produs(2, "Iaurt");
    Produs p3 = new Produs(3, "Branza");

    produse.add(p1);
    produse.add(p2);
    produse.add(p3);
  }

  
  @RequestMapping(value="/produs", method = RequestMethod.GET)
  public List<Produs> index() {
    return this.produse;
  }

  @RequestMapping(value="/produs/{nume}", method = RequestMethod.POST)
  public ResponseEntity create(@PathVariable("nume") String name) {
	  
	 Produs p = new Produs(this.produse.size() + 1,name); 
	 this.produse.add(p);
	
    return new ResponseEntity<Produs>(p, new HttpHeaders(), HttpStatus.OK);
  }


  
  @RequestMapping(value="/produs/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(Produs p : this.produse) {
      if(p.getId() == id) {
        return new ResponseEntity<Produs>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
   
   
  @RequestMapping(value="/produs", method = RequestMethod.PUT)
  public List<Produs> update(@RequestBody Produs p){
    for(Produs prod : this.produse){
      if(prod.getId() == p.getId())		  {
		  produse.set(produse.indexOf(prod), p);
      }
    }
    return this.produse;
  }
  
  
  @RequestMapping(value="/produs/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(Produs p : this.produse) {
      if(p.getId() == id) {
        this.produse.remove(p);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
}