import { NavBar } from './components/navbar';
import { Home } from "./components/home";
import {Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/all.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
