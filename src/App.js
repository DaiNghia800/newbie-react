import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Section1 } from './components/section-1/section-1';
import { Section2 } from './components/section-2/section-2';
import { Section3 } from './components/section-3/section-3';
import { Section4 } from './components/section-4/section-4';
import { Section5 } from './components/section-5/section-5';
import { Section6 } from './components/section-6/section-6';


function App() {
  return (
    <>
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Footer/>
    </>
  );
}

export default App;
