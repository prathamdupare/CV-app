import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import PictureUpload from './components/profile';
import Skills from './components/Skills';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="heading">CV Application</h1>
      <PictureUpload />
      <GeneralInfo />
      <Education />
      <Experience />
      <Skills />
    </>
  );
}

export default App;
