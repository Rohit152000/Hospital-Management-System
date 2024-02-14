package HospitalManagement.spring.example;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Hospital_Model")
public class Hospital_Entity {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int patient_id;
	private String name;
	private String age;
	private String bloodgroup;
	private String symptoms;
	private String address;
	private String phone_no;
	public Hospital_Entity() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @return the patient_id
	 */
	public int getPatient_id() {
		return patient_id;
	}
	/**
	 * @param patient_id the patient_id to set
	 */
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the age
	 */
	public String getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(String age) {
		this.age = age;
	}
	/**
	 * @return the bloodgroup
	 */
	public String getBloodgroup() {
		return bloodgroup;
	}
	/**
	 * @param bloodgroup the bloodgroup to set
	 */
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	/**
	 * @return the symptoms
	 */
	public String getSymptoms() {
		return symptoms;
	}
	/**
	 * @param symptoms the symptoms to set
	 */
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	/**
	 * @return the phone_no
	 */
	public String getPhone_no() {
		return phone_no;
	}
	/**
	 * @param phone_no the phone_no to set
	 */
	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}
	@Override
	public String toString() {
		return "Hospital_Entity [patient_id=" + patient_id + ", name=" + name + ", age=" + age + ", bloodgroup="
				+ bloodgroup + ", symptoms=" + symptoms + ", address=" + address + ", phone_no=" + phone_no + "]";
	}

}
