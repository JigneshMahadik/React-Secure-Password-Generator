// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import clipboard from "./clipboard.png";

function App() {

  const [pwd, setPwd] = useState("");

  function generate(){
    var len = document.getElementById("len").value;
    // alert(len);
    var num = document.getElementById("num");
    // alert(numbers.checked);
    var char = document.getElementById("char");
    // alert(char.checked);

    var combinedChar = "";
    var numbers = "0123456789";
    var characters = "!@#$%^&*()+={}[]<>/?";

    if(len === ""){
      alert("Please Enter Minimum Character Length !");
      return;
    }

    if(num.checked){
      combinedChar += numbers;
    }
    if(char.checked){
      combinedChar += characters;
    }
    if(combinedChar === ""){
      alert("All checks are empty !");
      return;
    }

    let password = "";
    for(let i=0;i<len;i++){
      password += combinedChar[Math.floor(Math.random() * combinedChar.length)];
    }

    if(password !== undefined){
      setPwd(password);
      // console.log(password);
      document.getElementById("copy").style.display = "block";
      // document.getElementById("copy").style.alignSelf = "center";
      // pass.textContent = password;
      // alert("jac");
    }
  }

  function copy(){
    navigator.clipboard.writeText(pwd);
    alert("Copied");
  }

  return (
    <div className="App">
      <div className="cont">
        <h1>Secure Password Generator</h1>
        <div className="inputs">
          <label>Min Character : </label>
          <input type="number" min="1" max="30" id="len"/>
        </div>
        <br></br>
        <br></br>
        <div className="inputs">
          <label>Include Numbers : </label>
          <input type="checkbox" id="num"/>
        </div>
        <br></br>
        <div className="inputs">
          <label>Include Characters : </label>
          <input type="checkbox" id="char"/>
        </div>
        <br></br>
        <br></br>
        <button className="btn" onClick={generate}>Generate</button>
        <br></br>
        <div id='copy'>
          <p>{pwd}</p>
          <img src={clipboard} onClick={copy} alt='NA' height={30}/>
        </div>
      </div>
    </div>
  );
}

export default App;
