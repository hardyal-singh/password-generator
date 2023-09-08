import React, { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";


export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let passwordRef=useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,setPassword])

  let copyClipbord =useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <div className="container">
      <div className="main">
        <input type="text" value={password} readOnly placeholder="password"
        ref={passwordRef} />
        <input type="button" onClick={copyClipbord} value={"Copy"} />
        <br />
        <input
          type="range"
          value={length}
          min={1}
          max={100}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length:{length} </label>
        <label forHtml="number">Number</label>
        <input
          type="checkbox"
          id="nunber"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((preValue) => !preValue);
          }}
        />
        <label forHtml="char">Chartecr</label>
        <input
          type="checkbox"
          id="char"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((preValue) => !preValue);
          }}
        />
      </div>
    </div>
  );
}
