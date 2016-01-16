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
public class RachetaController {
  private List<Racheta> rachete = new ArrayList<Racheta>();

  RachetaController() {
    Racheta r1 = new Racheta(1, "Minuteman", 10000);
    Racheta r2 = new Racheta(2, "R-36M2", 10000);
    Racheta r3 = new Racheta(3, "DF-4", 6000);

    rachete.add(r1);
    rachete.add(r2);
    rachete.add(r3);
  }

  
  @RequestMapping(value="/racheta", method = RequestMethod.GET)
  public List<Racheta> index() {
    return this.rachete;
  }

  @RequestMapping(value="/racheta", method = RequestMethod.POST)
   public ResponseEntity create(@RequestBody Racheta r) {  	 
	 this.rachete.add(r);	
    return new ResponseEntity<Racheta>(r, new HttpHeaders(), HttpStatus.OK);
  }


  
  @RequestMapping(value="/racheta/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(Racheta p : this.rachete) {
      if(p.getId() == id) {
        return new ResponseEntity<Racheta>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
   
   
  @RequestMapping(value="/racheta", method = RequestMethod.PUT)
  public List<Racheta> update(@RequestBody Racheta r){
    for(Racheta racheta : this.rachete){
      if(racheta.getId() == r.getId())		  {
		  rachete.set(rachete.indexOf(racheta), r);
      }
    }
    return this.rachete;
  }
    
  @RequestMapping(value="/racheta/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(Racheta r : this.rachete) {
      if(r.getId() == id) {
        this.rachete.remove(r);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }
  
  
}