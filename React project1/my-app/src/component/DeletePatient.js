import React from 'react';

function DeletePatientById({ patient_id }) {
  // Function to handle delete operation
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:9991/patient/${patient_id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete patient');
      }
      alert('Patient deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete patient');
    }
  };

  return (
    <div>
      <h2>Delete Patient</h2>
      <p>Are you sure you want to delete patient with ID: {patient_id}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeletePatientById;
