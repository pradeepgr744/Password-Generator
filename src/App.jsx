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
    
        <div className='max-lg:w-[30vw] max-lg:h-[43vh] max-lg:w-[50vw] max-lg:h-[43vh] max-sm:w-full p-30 shadow-2xl my-3 hover:shadow-gray-800 mx-30 text-center p-3 bg-gray-800 rounded-md'>
          <h1 className='text-3xl text-white '>Password Generator</h1>
          <div className='flex justify-between overflow-hidden my-3 h-10 rounded-2xl bg-white'>
            <input
              className='bg-white mt-0 outline-none align-middle w-full text-2xl text-black px-3 text-left'
              id="dis"
              type='text'
              value={Password}
              placeholder='Password'
              readOnly
            />
            <button 
            className='font-md outline-none m-0 px-3 bg-[#577eff] text-white text-2xl'
            onClick={()=>{
              copy(dis)
            }}
            >copy</button>
          </div >
          <div>
            <button className='bg-green-400 m-3 rounded-full p-1 shadow-md hover:shadow-green-200 text-2xl'
            onClick={()=>passwordGenerator()
           
            }
            >Generate</button>
          </div>
          
          <div className='m-1'>
            <div className='flex items-center gap-x-1 text-2xl text-white'>
              <input
       
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer scale-50 hover:scale-100'
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>
            <div className=' flex items-center gap-x-1 m-2 text-2xl text-white'>
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
            <div className='flex items-center gap-x-1 m-2 text-2xl text-white'>
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