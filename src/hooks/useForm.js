import {useState} from 'react'
 const useForm = (initialState)=>{
    const[form, setForm] = useState(initialState)
  
    const onChangeInput = (event) =>{
          const value = event.target.value
          const  name = event.target.name
  
          setForm({...form,[name]:value})
    }

    return [form, onChangeInput]
}

export default useForm