import React, { useState, useEffect } from 'react';

function PatientDetailsById() {
  // State to store the patient ID entered by the user
  const [patientId, setPatientId] = useState('');
  
  // State to store the patient details
  const [patient, setPatient] = useState(null);

  // Function to fetch patient details by ID from the server
  const fetchPatientById = async () => {
    try {
      const response = await fetch(`http://localhost:9991/patientList/${patientId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPatient(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle input change for patient ID
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPatientById();
  };

  return (
    <div>
      <h2>Enter Patient ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Fetch Patient</button>
      </form>
      
      {/* Render patient details if available */}
      {patient && (
        <div>
          <h2>Patient Details</h2>
          <p><strong>ID:</strong> {patient.patient_id}</p>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
          <p><strong>Symptoms:</strong> {patient.symptoms}</p>
          <p><strong>Address:</strong> {patient.address}</p>
          <p><strong>Phone Number:</strong> {patient.phone_no}</p>
        </div>
      )}
    </div>
  );
}

export default PatientDetailsById;

