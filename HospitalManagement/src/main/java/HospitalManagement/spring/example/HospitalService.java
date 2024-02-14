package HospitalManagement.spring.example;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class HospitalService {
	@Autowired
	private HospitalRepository hospitalrepository;
	
	public Collection<Hospital_Entity> getAllData(){
		return hospitalrepository.findAll();
	}
	
	public Hospital_Entity getpatientById(Integer patientId) {
		Optional<Hospital_Entity> optionalRef = hospitalrepository.findById(patientId);
		Hospital_Entity foundpatient = null;
		if(!optionalRef.isEmpty())
			foundpatient = optionalRef.get();
		return foundpatient;
	}
	public void addNewPatient(Hospital_Entity newpatient) {
		hospitalrepository.save(newpatient);
	}
	

	public Hospital_Entity deletePatientById(Integer patientId) {
	    Optional<Hospital_Entity> optionalRef = hospitalrepository.findById(patientId);
	    if (optionalRef.isPresent()) {
	        Hospital_Entity foundPatient = optionalRef.get();
	        hospitalrepository.deleteById(patientId); // Delete the patient by ID
	        return foundPatient;
	    } else {
	        // Handle the case where the patient with the given ID is not found
	        return null;
	    }
	}
	
	public Hospital_Entity updatePatientFieldById(Integer patientId, String fieldName, String fieldValue) {
        Optional<Hospital_Entity> optionalPatient = hospitalrepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Hospital_Entity existingPatient = optionalPatient.get();
            switch (fieldName) {
                case "name":
                    existingPatient.setName(fieldValue);
                    break;
                case "age":
                    existingPatient.setAge(fieldValue);
                    break;
                case "bloodgroup":
                    existingPatient.setBloodgroup(fieldValue);
                    break;
                case "symptoms":
                    existingPatient.setSymptoms(fieldValue);
                    break;
                case "address":
                    existingPatient.setAddress(fieldValue);
                    break;
                case "phone_no":
                    existingPatient.setPhone_no(fieldValue);
                    break;
                default:
                    // Handle invalid field name
                    return null;
            }
            return hospitalrepository.save(existingPatient);
        } else {
            return null; // Or throw an exception indicating patient not found
        }
    }
}
