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
public class PersoanaController {
  private List<Masina> masini = new ArrayList<Masina>();

  PersoanaController() {
    Masina p3 = new Masina(1, "Bugatti Veyron", 200);
    Masina p2 = new Masina(2, "Dacia Sandero", 1000);
    Masina p1 = new Masina(3, "Mclaren P1", 500);

    masini.add(p1);
    masini.add(p2);
    masini.add(p3);
  }

  
  @RequestMapping(value="/masina", method = RequestMethod.GET)
  public List<Masina> index() {
    return this.masini;
  }

  @RequestMapping(value="/masina", method = RequestMethod.POST)
  public ResponseEntity create(@RequestParam(value = "name", defaultValue="eroare") String name,@RequestParam(value = "power", defaultValue="0") int pow) {
	  
	 Masina p = new Masina(this.masini.size() + 1,name,pow); 
	 this.masini.add(p);
	
    return new ResponseEntity<Masina>(p, new HttpHeaders(), HttpStatus.OK);
  }


  
  @RequestMapping(value="/masina/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(Masina p : this.masini) {
      if(p.getId() == id) {
        return new ResponseEntity<Masina>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
   
  @RequestMapping(value="/masina/{id}", method = RequestMethod.PUT)
  public ResponseEntity update(@RequestParam(value = "name", defaultValue="eroare") String name,@PathVariable("id") int id,@RequestParam(value = "power", defaultValue="0") int pow) {
	 for(Masina p : this.masini) {
      if(p.getId() == id) {
         Masina nouaPersoana = new Masina(id,name,pow); 
		 this.masini.set(id,nouaPersoana);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
  @RequestMapping(value="/masina/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(Masina p : this.masini) {
      if(p.getId() == id) {
        this.masini.remove(p);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NO_CONTENT);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
}