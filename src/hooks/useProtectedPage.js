import {useEffect} from 'react'
import { useHistory } from 'react-router'
import{replaceToLoginPage} from '../routers/Coordinator'
const useProtectedPage = () =>{
  const history = useHistory()

  useEffect(()=>{
       const token = localStorage.getItem("token")

       if (!token){
           replaceToLoginPage(history)
       }

    },[history])
}

export default useProtectedPage