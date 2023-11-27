import {useState , useCallback} from 'react'

function PassGenratorApp(){

    const [ length , setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [characterAllowed , setCharacterAllowed] =  useState("")
    const [Password , serPassword] = useState()

    

    const passwordGenerator = useCallback(()=> {

    }, [length, numberAllowed , characterAllowed, serPassword])
    return(
        <>
        <div className='bg-black w-full min-h-screen'>
            <h1 className='text-white'>Password Generator</h1>
        </div>
        
        </>
    )
}

export default PassGenratorApp;