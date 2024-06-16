import React ,{useCallback, useEffect, useState} from 'react';


function App() {
const[length ,setLength]=useState(8);
const[numberALlowed, setNumberAllowed]=useState(false);
const[charAllowed , setCharAllowed]=useState(false);
const[password, setPassword]=useState('');

const generatePassword = useCallback(()=>{
  let pass=""
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numberALlowed) str +="0123456789"
if(charAllowed) str+="!@#$%6^&*()_+"

for(let i=1; i<length;i++)
  {
    const char=Math.floor(Math.random()*str.length+1)
    pass +=str.charAt(char)

  }
  setPassword(pass)

},[length,numberALlowed,charAllowed])

const copyPassword =()=>{
  window.navigator.clipboard.writeText(password);
}


useEffect(()=>{
  generatePassword()

},[length,numberALlowed,charAllowed])

 


  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-orange-800 text-orange-500">
    <h1 className="text-white text-center my-3">
      Password Generator
    </h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"  value={password}  className="outline-none w-full py-1 px-3" placeholder="Enter the Password" />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "  onClick={copyPassword}>copy</button>

    </div>
      <div  className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length}  className="cursor-pointer" onChange={(e)=>setLength(e.target.value)} name="" id=""  />
          <label className='text-white' htmlFor='length'>Length: {length} </label>

        </div>
        <div className="flex items-center gap-x-1">
         <input  type="checkbox" name=""  id=""  defaultChecked={numberALlowed}  onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
         <label  className='text-white' htmlFor='number'>Numbers </label>

        </div>
        <div className="flex items-center gap-x-1">
         <input  type="checkbox" name=""  id=""  defaultChecked={charAllowed}  onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
         <label className='text-white' htmlFor='charInput'>Character </label>

        </div>
      </div>

  </div>
  );
}

export default App;
