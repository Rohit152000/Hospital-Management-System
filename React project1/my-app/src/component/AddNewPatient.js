import React, { useState } from 'react';
import './AddPatient.css'; // Import CSS file for styling

function AddPatient() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodgroup: '',
    symptoms: '',
    address: '',
    phone_no: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9991/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add patient');
      }
      // Clear form fields after successful submission
      setFormData({
        name: '',
        age: '',
        bloodgroup: '',
        symptoms: '',
        address: '',
        phone_no: ''
      });
      alert('Patient added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add patient');
    }
  };

  return (
    <div className="add-patient-container">
      <h2>Patient Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Symptoms:</label>
          <input type="text" name="symptoms" value={formData.symptoms} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPatient;
