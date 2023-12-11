import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";

 export function Counter(){
   const [counter,setCounter]=useState(0);
function Reset(){
         setCounter(counter*0);
          }
    function mul(){
        var mulval=document.getElementById("value").value;
        setCounter(counter*mulval)
    }
    const disable = counter == 0; 
    const disable1 = counter>9;
   return(
<div className="text-center">
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}} disabled={disable1}>ADD</button>
    <button onClick={()=>{setCounter(counter-1)}}disabled={disable}>SUB</button>
    <button onClick={Reset}>Reset</button>
    <input className="value" id="value" type="text"></input><button onClick={mul}>MUl</button>
    </div>
   );
 }