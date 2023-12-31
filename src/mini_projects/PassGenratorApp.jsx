import {useState , useCallback ,useEffect ,useRef} from 'react'

function PassGenratorApp(){

    const [ length , setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [characterAllowed , setCharacterAllowed] =  useState("")
    const [password , setPassword] = useState()


    //use ref hook

    //take the reference of element and allow to manipulation
    const passwordRef = useRef(null)
    

    const passwordGenerator = useCallback(()=> {
        let pass=""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        if( numberAllowed) str+= "01234565789"
        if( numberAllowed) str+= "!@#$%^&*-_+=[]{}~`"

        for(let i = 1 ; i<= length ; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)


    }, [length, numberAllowed , characterAllowed, setPassword])



    // passwordGenerator() //cannot use in this way 

    //useEffect run on first reload and render again  if any of the dependancies have changes
    useEffect(()=> {
    passwordGenerator() }, [length,numberAllowed,characterAllowed,passwordGenerator])

    const copyPasswordOnClipboard =  useCallback(()=>{
        /* here the passwordRef is variable and 
        '.cuurent' is method perform on the current value 
        '.select()' is use to hight that current value*/
        passwordRef.current?.select();
        passwordRef.current?.selectSelectionRange(0,10) ;
         //this is server side so we can use it but if it was build in the NEXT.js (server side ) than it dosen't exit
         window.navigator.clipboard.writeText(password) //allow user to copy value in the clipboard
    },[password])

    return(
        <>
        <div className='bg-black w-full  h-screen	pt-8'>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mb-8 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>
                    <div className="flex shadow rounded-lg overflow-hidden mb-4">
                        <input
                            type='text'
                            value={password}
                            className='outline-none w-full py-1 px-3'
                            placeholder='Password'
                            readOnly
                            ref={passwordRef}
                            />
                        <button onClick= {copyPasswordOnClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
                    </div>
                    <div className='flex text-sm gap-x-2'>
                        <div className='flex items-center gap-x-1'>
                            <input
                            type='range'
                            min={0}
                            max={100}
                            value={length}
                            className='cursor-pointer' 
                            onChange={(e) => {setLength(e.target.value)}}/>
                             <label>Length: {length}</label>

                        </div>

                        <div className="flex items-center gap-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={numberAllowed}
                                id="numberInput"
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="numberInput">Numbers</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={characterAllowed}
                                id="characterInput"
                                onChange={() => {
                                    setCharacterAllowed((prev) => !prev )
                                }}
                            />
                            <label htmlFor="characterInput">Characters</label>
                        </div>
                 </div>
                        
            </div>
        </div>
        
        </>
    )
}

export default PassGenratorApp;