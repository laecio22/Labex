import {useState, useEffect} from 'react'

 export const useRedirectPage = (newName, newFunction, otherName,otherFunction) =>{
    const[name, setName] = useState('')    
    const[secondName,setSecondName] = useState('')
    useEffect(()=>{
        setName(newName)
        setSecondName(otherName)
    }, [newName])
    

    const redirectPage = () =>{
          return newFunction()
    }

    const otherRedirectPage = () =>{
        return otherFunction()
    }

    return [name, redirectPage, secondName, otherRedirectPage]
}