import React, { useState, useEffect } from 'react';

function UpdatePatientById({ patient_id }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodgroup: '',
    symptoms: '',
    address: '',
    phone_no: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedField, setSelectedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9991/${patient_id}?fieldName=${selectedField}&fieldValue=${formData[selectedField]}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ [selectedField]: formData[selectedField] })
      });
      if (!response.ok) {
        throw new Error('Failed to update patient');
      }
      alert('Patient updated successfully');
      // Optionally, update state or perform any additional actions upon successful update
    } catch (error) {
      console.error(error);
      alert('Failed to update patient');
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleRadioChange = (field) => {
    setSelectedField(field);
  };
  useEffect(() => {
    // Fetch patient details or any other logic if needed
  }, [patient_id]); // Add dependencies if necessary

  return (
    <div>
      <button onClick={toggleForm}>Click for Update </button>
      {showForm && (
        <div>
          <h2>Update Patient</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="radio"
                  name="field"
                  value="name"
                  checked={selectedField === 'name'}
                  onChange={() => handleRadioChange('name')}
                />
              </label>
              {selectedField === 'name' && (
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              )}
            </div>
            <div>
              <label>
                Age:
                <input
                  type="radio"
                  name="field"
                  value="age"
                  checked={selectedField === 'age'}
                  onChange={() => handleRadioChange('age')}
                />
              </label>
              {selectedField === 'age' && (
                <input type="text" name="age" value={formData.age} onChange={handleChange} required />
              )}
            </div>
            <div>
              <label>
                Blood Group:
                <input
                  type="radio"
                  name="field"
                  value="bloodgroup"
                  checked={selectedField === 'bloodgroup'}
                  onChange={() => handleRadioChange('bloodgroup')}
                />
              </label>
              {selectedField === 'bloodgroup' && (
                <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} required />
              )}
            </div>
            <div>
              <label>
                Symptoms:
                <input
                  type="radio"
                  name="field"
                  value="symptoms"
                  checked={selectedField === 'symptoms'}
                  onChange={() => handleRadioChange('symptoms')}
                />
              </label>
              {selectedField === 'symptoms' && (
                <input type="text" name="symptoms" value={formData.symptoms} onChange={handleChange} required />
              )}
            </div>
            <div>
              <label>
                Address:
                <input
                  type="radio"
                  name="field"
                  value="address"
                  checked={selectedField === 'address'}
                  onChange={() => handleRadioChange('address')}
                />
              </label>
              {selectedField === 'address' && (
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              )}
            </div>
            <div>
              <label>
                Phone Number:
                <input
                  type="radio"
                  name="field"
                  value="phone_no"
                  checked={selectedField === 'phone_no'}
                  onChange={() => handleRadioChange('phone_no')}
                />
              </label>
              {selectedField === 'phone_no' && (
                <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdatePatientById;




