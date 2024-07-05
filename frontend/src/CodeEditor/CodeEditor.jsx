import {useState} from 'react'
import Editor from '@monaco-editor/react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'

const CodeEditor=()=>{
    const [userCode, setUserCode]=useState(``);
    const [userLang, setUserLang]=useState("python");
    const [userTheme,setUserTheme]=useState("vs-dark");
    const [fontSize, setFontSize]=useState(20);
    const [userInput, setUserInput]=useState("");
    const [userOutput,setUserOutput]=useState('');
    const [loading,setLoading]=useState(false);

    const options={
        fontSize:fontSize
    }

    const compile =async()=>{
        setLoading(true);
        if(userCode===``){
            return
        }
        try{
     const response=   await axios.post(`http://localhost:8000/api/compiler`,{
            code:userCode,
            language:userLang,
            input:userInput
        })
        setUserOutput(response.data.output)
        setLoading(false);
    }catch(err){
        console.log(err);
    }
    }

    function clearOutput(){
          setUserOutput("");
    }
    return(
        <div className="App">
        <Navbar
            userLang={userLang} setUserLang={setUserLang}
            userTheme={userTheme} setUserTheme={setUserTheme}
            fontSize={fontSize} setFontSize={setFontSize}
        />
        <div className="main">
            <div className="left-container">
                <Editor
                    options={options}
                    height="calc(100vh - 50px)"
                    width="100%"
                    theme={userTheme}
                    language={userLang}
                    defaultLanguage="python"
                    defaultValue="# Enter your code here"
                    onChange={(value) => { setUserCode(value) }}
                />
                <button className="run-btn" onClick={() => compile()}>
                    Run
                </button>
            </div>
            <div className="right-container">
                <h4>Input:</h4>
                <div className="input-box">
                    <textarea id="code-inp" onChange=
                        {(e) => setUserInput(e.target.value)}>
                    </textarea>
                </div>
                <h4>Output:</h4>
                {loading ? (
                    <div className="spinner-box">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="output-box">
                        <pre>{userOutput}</pre>
                        <button onClick={() => { clearOutput() }}
                            className="clear-btn">
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
    )


}
export default CodeEditor