import React, { useState, useCallback, useEffect } from 'react'

const App = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  
  useEffect(()=>{
    passwordGenerator()

  },[length,numberAllowed, charAllowed, passwordGenerator])

const copy=(dis) => {
dis.select();
document.execCommand("copy")
}




  return (
    <>
    
        <div className='p-30 shadow-2xl hover:shadow-gray-800 mx-30 text-center p-3 bg-gray-800 rounded-md'>
          <h1 className=' text-white '>Password Generator</h1>
          <div className='flex justify-between overflow-hidden h-6 rounded-lg bg-white'>
            <input
              className='bg-white mt-0 outline-none align-middle w-full text-black px-1 text-left'
              id="dis"
              type='text'
              value={Password}
              placeholder='Password'
              readOnly
            />
            <button 
            className='font-md outline-none m-0 px-3 bg-[#577eff] text-white'
            onClick={()=>{
              copy(dis)
            }}
            >copy</button>
          </div >
          <div>
            <button className='bg-green-400 m-3 rounded-2xl p-1 shadow-md hover:shadow-green-200'
            onClick={()=>passwordGenerator()
           
            }
            >Generate</button>
          </div>
          
          <div className='m-1'>
            <div className='flex items-center gap-x-1 text-sm text-white'>
              <input
       
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer scale-50 hover:scale-75'
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1 text-sm text-white'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setnumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1 text-sm text-white'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setcharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
 
    </>
  )
}

export default App