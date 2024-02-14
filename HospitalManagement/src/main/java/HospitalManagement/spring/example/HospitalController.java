package HospitalManagement.spring.example;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin("*")
@RestController
public class HospitalController {
	@Autowired
	public HospitalService hospitalservices;
	@GetMapping("/patientList")
	public Collection<Hospital_Entity> getAlldata()
	{
		return hospitalservices.getAllData();
	}
	
	@GetMapping("/patientList/{patient_id}")
	public Hospital_Entity getPatientById(@PathVariable("patient_id") Integer patientId) {
		Hospital_Entity foundpatient = hospitalservices.getpatientById(patientId);
		return foundpatient;
	}
	
	@PostMapping("/patient")
	public void createNewPatient(@RequestBody Hospital_Entity newPatient) {
		System.out.println("Object received: " + newPatient);
		hospitalservices.addNewPatient(newPatient);
	}
	
	@DeleteMapping("/patient/{patient_id}")
	public Hospital_Entity deletePatientById(@PathVariable("patient_id") Integer patientId) {
		Hospital_Entity foundPatient = hospitalservices.deletePatientById(patientId);
		return foundPatient;
	}
	

	@PutMapping("/{patientId}")//http://localhost:9991/1?fieldName=name&fieldValue=John+Doe
    public ResponseEntity<Hospital_Entity> updatePatientFieldById(@PathVariable("patientId") Integer patientId,
                                                                   @RequestParam("fieldName") String fieldName,
                                                                   @RequestParam("fieldValue") String fieldValue) {
        Hospital_Entity updatedEntity = hospitalservices.updatePatientFieldById(patientId, fieldName, fieldValue);
        if (updatedEntity != null) {
            return ResponseEntity.ok(updatedEntity);
        } else {
            return ResponseEntity.notFound().build(); // Or return ResponseEntity with appropriate error message
        }
    }
    

	

	

}
