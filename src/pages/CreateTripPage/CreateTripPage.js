import React from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerTripPage,FormContainerTrip,ButtonRegisterTrip,InputForm} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { goToTripDetailsPage, logout} from '../../routers/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import useInput from '../../hooks/useInput'
import {header, BASE_URL} from '../../constants/urls'
import axios from 'axios'



function CreateTripPage() {
  const history = useHistory()
  const[name,onChangeName] = useInput('')
  const[durationInDays, onChangeDurationInDays] = useInput('')
  const[description, onChangeDescription] = useInput('')
  const[date, onChangeDate] = useInput('')
  const[planet, onChangePlanet] = useInput('')
  const token = localStorage.getItem('token')

  useProtectedPage()  
 
  const onSubmitTrip = (event) =>{
       
        event.preventDefault()

        const body = {
              name,
              durationInDays,
              description,
              date,
              planet
         }

         axios.post(`${BASE_URL}/trips`, body, header(token))
         .then((response)=>{
              alert("cadastro realizado com sucesso")
              console.log(response)
         })
         .catch((error)=>{
              console.log(error)
         })
  } 
  
  return (
    <ContainerTripPage>         
         <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>
         <Main>
            <h2 onClick={()=>goToTripDetailsPage(history)}>Detalhar</h2>
            <FormContainerTrip onSubmit={onSubmitTrip}>
                <h1>Cadastro de Viagem</h1>                
                     <InputForm>
                           <label>Nome da Viagem</label>
                           <input type={'text'} placeholder="nome da viagem" value={name} onChange={onChangeName}  minLength="5"required/>
                     </InputForm>
                     <InputForm>
                           <label>Duração em dias</label>
                           <input type={'number'} placeholder="duração da viagem" value={durationInDays} onChange={onChangeDurationInDays} min="50" required/>
                     </InputForm>
                     <InputForm>
                           <label>Data partida</label>
                           <input type={'date'} value={date} onChange={onChangeDate} min={date} required />
                     </InputForm>
                     <InputForm>
                           <label>Descrição</label>                           
                           <input type={'text'} placeholder="descrição" value={description} onChange={onChangeDescription}  minLength="30"  required/>                          
                     </InputForm>
                     <InputForm>
                           <label>Planeta</label>
                           <select onChange={onChangePlanet}  required >
                                <option value="">Selecione o planeta </option>
                                <option value="Mercúrio">Mercúrio </option>
                                <option value="Vênus">Vênus </option>
                                <option value="Terra">Terra</option>
                                <option value="Marte">Marte </option>
                                <option value="Júpiter">Júpiter </option>
                                <option value="Saturno">Saturno </option>
                                <option value="Urano">Urano</option>
                                <option value="Netuno">Netuno </option>                                
                           </select>
                     </InputForm>                     
                     <ButtonRegisterTrip>Cadastrar</ButtonRegisterTrip>                
            </FormContainerTrip>
         </Main>
         <Footer/>        
    </ContainerTripPage>
  );
}

export default CreateTripPage;
