import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import reportWebVitals from './component/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import UpdatePatientById from './component/UpdatePatientDetails';
import DeletePatientById from './component/DeletePatient';
import PatientDetails from './component/PatientDetails';
import PatientDetailsById from './component/PatientDetailsByid';
import AddPatient from './component/AddNewPatient';
const routerExample= createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {path : "", element:<Home/>},
    {path : "Home", element:<Home/>},
    {path :"UpdatePatientById", element:<UpdatePatientById/>},
    {path :"DeletePatientById",element:<DeletePatientById/>},
    {path :"PatientDetailsById", element:<PatientDetailsById/>},
    {path :"PatientDetails", element:<PatientDetails/>},
    {path :"AddPatient", element:<AddPatient/>}
    
  ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
root.render(<RouterProvider router={routerExample}></RouterProvider>)