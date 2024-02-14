package HospitalManagement.spring.example;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital_Entity, Integer> {
	

}
