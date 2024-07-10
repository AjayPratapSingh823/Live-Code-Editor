import './App.css';
import CodeEditor from './CodeEditor/CodeEditor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup';
import Login from './Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CodeEditor/>} ></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
