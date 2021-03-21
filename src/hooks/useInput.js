import {useState} from 'react'

const useInput = (initialValue) =>{

    const[input, setInput] = useState(initialValue)

    const onChangeInput = (event) =>{
          setInput(event.target.value)
    }

    return[input, onChangeInput]

}

export default useInput

