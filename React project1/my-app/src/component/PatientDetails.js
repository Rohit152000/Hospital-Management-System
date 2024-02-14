
 import React, { useState, useEffect } from 'react';
import DeletePatientById from './DeletePatient'; // Import the DeletePatientById component
import UpdatePatientById from './UpdatePatientDetails'; // Import the UpdatePatientById component
// import './PatientDetails.css'; // Import CSS file for styling

function PatientDetails() {
  // State to store the list of patients
  const [patients, setPatients] = useState([]);
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  // Function to fetch patient details from the server
  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:9991/patientList');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch patient details when the component mounts
  useEffect(() => {
    fetchPatients();
  }, []);

 
  

 

  return (
    <div className="patient-details-container">
      <h2>Patient Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Symptoms</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patient_id}>
              <td>{patient.patient_id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.bloodgroup}</td>
              <td>{patient.symptoms}</td>
              <td>{patient.address}</td>
              <td>{patient.phone_no}</td>
              <td>
                <div className="action-buttons">
                  <DeletePatientById patient_id={patient.patient_id} />
                  <UpdatePatientById patient_id={patient.patient_id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default PatientDetails;
