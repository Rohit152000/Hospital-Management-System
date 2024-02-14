import React from 'react'
import { Link } from 'react-router-dom';
 function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      {/* <Link class="navbar-brand" href="#">Navbar</Link> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
            
            <Link class="nav-link active" aria-current="page" to="home">Home</Link>
           </li> 
          <li class="nav-item">
            <Link class="nav-link" to="AddPatient">ADD PATIENT</Link>
          </li>
           {/* <li class="nav-item">
            <Link class="nav-link" to="UpdatePatientById">UPDATE PATIENT</Link>
          </li> */}
          
          {/* <li class="nav-item">
            <Link class="nav-link" to="DeletePatientById">DELETE PATIENT</Link>
          </li>  */}
          <li class="nav-item">
            <Link class="nav-link" to="PatientDetailsById">GET PATIENT BY Id</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="PatientDetails">GET ALL PATIENT</Link>
          </li>          
        </ul>
       
      </div>
    </div>
  </nav>
  )
}
export default Header;