
import './App.css'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Intro/>
        <About/>
        <Resume/>
        <Contact/> 
      </div>    
    </BrowserRouter>
  );
}

export default App;
