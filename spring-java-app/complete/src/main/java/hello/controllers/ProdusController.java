package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.ArrayList;


@RestController
public class ProdusController {
  private List<Produs> produse = new ArrayList<Produs>();

  PersoanaController() {
    produs p1 = new produs(1 , 4, "Coca Cola");
    produs p2 = new produs(2 , 3, "Sprite");
    produs p3 = new produs(3 , 5, "Lipton");

    produse.add(p1);
    produse.add(p2);
    produse.add(p3);
  }

  
  @RequestMapping(value="/produs", method = RequestMethod.GET)
  public List<produs> index() {
    return this.produse;
  }

  @RequestMapping(value="/produs", method = RequestMethod.POST)
  public ResponseEntity create(@RequestParam(value = "name", defaultValue="eroare") String name, @RequestParam(value = "price", defaultValue=0) int pr) {
	  
	 produs p = new produs(this.produse.size() + 1,pr,name); 
	 this.produse.add(p);
	
    return new ResponseEntity<produs>(p, new HttpHeaders(), HttpStatus.OK);
  }


  
  @RequestMapping(value="/produs/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(produs p : this.produse) {
      if(p.getId() == id) {
        return new ResponseEntity<produs>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
   
  @RequestMapping(value="/produs/{id}", method = RequestMethod.PUT)
  public ResponseEntity update(@RequestParam(value = "name", defaultValue="eroare") String name,@PathVariable("id") int id, @RequestParam(value = "price", defaultValue=0) int pr) {
	 for(produs p : this.produse) {
      if(p.getId() == id) {
         produs nouaPersoana = new produs(id, pr, name); 
		 this.produse.set(id,nouaPersoana);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
  @RequestMapping(value="/produs/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(produs p : this.produse) {
      if(p.getId() == id) {
        this.produse.remove(p);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NO_CONTENT);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
}