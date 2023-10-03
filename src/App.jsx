// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
    </>
  );
}

export default App;
