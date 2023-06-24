import './App.css';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UiLocation from './components/UiLocation';
import WorkingSection from './components/WorkingSection';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <UiLocation />
      <Hero />
      <WorkingSection />
      <ContactForm />
    </div>
  );
}

export default App;
