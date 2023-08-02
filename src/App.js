import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <SideBar />
      <Footer />
      <BackButton />
    </div>
  );
}

export default App;
