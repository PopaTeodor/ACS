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
public class MasinaController {
  private List<Masina> masini = new ArrayList<Masina>();

  MasinaController() {
    Masina p1 = new Masina(1, "Dacia");
    Masina p2 = new Masina(2, "Bugatti");
    Masina p3 = new Masina(3, "Mercedes");

    masini.add(p1);
    masini.add(p2);
    masini.add(p3);
  }

  
  @RequestMapping(value="/persoana", method = RequestMethod.GET)
  public List<Masina> index() {
    return this.masini;
  }

  @RequestMapping(value="/persoana", method = RequestMethod.POST)
  public ResponseEntity create(@RequestParam(value = "name", defaultValue="eroare") String name) {
	  
	 Masina p = new Masina(this.masini.size() + 1,name); 
	 this.masini.add(p);
	
    return new ResponseEntity<Masina>(p, new HttpHeaders(), HttpStatus.OK);
  }


  
  @RequestMapping(value="/persoana/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(Masina p : this.masini) {
      if(p.getId() == id) {
        return new ResponseEntity<Masina>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
   
  @RequestMapping(value="/persoana/{id}", method = RequestMethod.PUT)
  public ResponseEntity update(@RequestParam(value = "name", defaultValue="eroare") String name, @PathVariable("id") int id) {
	 for(Masina p : this.masini) {
      if(p.getId() == id) {
         Masina nouaMasina = new Masina(id,name); 
		 this.masini.set(id,nouaMasina);
		 return new ResponseEntity<Masina>(nouaMasina, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
  @RequestMapping(value="/persoana/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(Masina p : this.masini) {
      if(p.getId() == id) {
        this.masini.remove(p);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
}