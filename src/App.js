import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Formations from './components/Formations';
import Projects from './components/Projects';
import Team from './components/Team';
import InscriptionForms from './components/InscriptionForms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Formations />
      <Projects />
      <Team />
      <InscriptionForms />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
