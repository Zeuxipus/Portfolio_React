import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// importation du router, mettre autour de l'app/ as permet de changer le nom 
import { BrowserRouter, BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Apropos from './about.jsx';
import Contact from './contact.jsx';
import Experiences from './projets.jsx';
import "../src/style/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* mise en place du router */}
    <BrowserRouter>
    {/* création de route */}
    <Routes>
      <Route path="/" element={<App /> } />
      <Route path="/about" element={<Apropos/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projets" element={<Experiences/>} />
     </Routes>
    {/* <App /> */}
  </BrowserRouter>
  </React.StrictMode>
);

