import './App.css';
import { Navbar } from "./component/navbar/navbar";
import { Section } from './component/section1/section1';
// import { Section1 } from "./components/section1/section1";
// import { Section2 } from "./components/section2/section2";

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Navbar />

        <Section />
      {/* 
        <Section1 />

        <Section2 /> */}
      </div>
    </div>
  );
}

export default App;
