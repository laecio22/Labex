import {useState, useEffect} from 'react'

 export const useRedirectPage = (newName, newFunction) =>{
    const[name, setName] = useState('')    

    useEffect(()=>{
        setName(newName)
    }, [newName])
    

    const redirectPage = () =>{
          return newFunction()
    }

    return [name, redirectPage]
}