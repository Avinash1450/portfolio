
import './App.css'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Intro/>
     <About/>
     <Resume/>
     <Contact/>
    </div>
  );
}

export default App;
