import './App.css';
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
    </div>
  );
}

export default App;
