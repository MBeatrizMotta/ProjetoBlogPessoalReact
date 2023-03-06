import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';
import './App.css';

function App() {
  return (
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route/>
      </Routes>
      </div>
      <Footer />
      </Router>
      )
  
}

export default App;
=======
import Home from './paginas/home/Home';
import logo from './logo.svg';
import './App.css';

function App() {
return (
  <Home />
)

}
  

export default App;
>>>>>>> origin/main
