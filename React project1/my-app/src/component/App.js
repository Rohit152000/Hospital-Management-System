import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div>
     
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  );
}

export default App;
