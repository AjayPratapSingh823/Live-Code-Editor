import './App.css';
import CodeEditor from './CodeEditor/CodeEditor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CodeEditor/>} ></Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
