import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../components/Header/Header'
import {ContainerApplicationFormPage,FormContainerCandidate,InputForm,ButtonRegisterCandidate} from './styled'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome} from '../../routers/Coordinator'
//import useInput from '../../hooks/useInput'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


function ApplicationFormPage() {

  const history = useHistory() 
//   const[country, onChangeCountry] = useInput('')
//   const[trip, onChangeTrip] = useInput('')
  const[trips, setTrips] = useState([])
  const[form,onChangeInput] = useForm({      
            name:'',
            age: 0,
            applicationText: '',
            profession:'',
            country: '',
            trip: ''
        })     
       
  
  const[countrys, setCountrys] = useState([])
  
 
  useEffect(()=>{
      axios.get(`${BASE_URL}/trips`).then((response)=>{
            setTrips(response.data.trips)                  
          }).catch((error)=>{
              alert(error)
          })
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome')
      .then((response)=>{
            setCountrys(response.data)           
           
      })
      .catch((error)=>{
            console.log(error)
      })

    },[])   

 
  const onSubmitCandidate = (event) =>{
          event.preventDefault()
          const body = {
                  name:form.name,
                  age: form.age,
                  applicationText: form.applicationText,
                  profession:form.profession,
                  country: form.country,                
            
          }

          axios.post(`${BASE_URL}/trips/${form.trip}/apply`, body)
          .then((response)=>{
               alert("Candidatura enviada com sucesso")               
          })
           .catch((error)=>{
               console.log(error)
          })        
  }
  
   
 
  return (
    <ContainerApplicationFormPage>
        <Header redirectPage={()=>goToHome(history)} titleRedirect={"Home"}/>
        <Main>           
            <FormContainerCandidate onSubmit={onSubmitCandidate}>
                    <h1>Formulário</h1>                
                     <InputForm>
                           <label>Nome</label>
                           <input type={'text'} placeholder="Digite seu Nome" value={form['name']} name={'name'} onChange={onChangeInput} minLength="3" required/>
                     </InputForm>
                     <InputForm>
                           <label>Idade</label>
                           <input type={'number'} placeholder="Informe sua idade" value={form['age']}  name={'age'} onChange={onChangeInput} min="18" required/>
                     </InputForm>
                     <InputForm>
                           <label>Profissão</label>
                           <input type={'text'} placeholder="Digite sua profissão" value={form['profession']}  name={'profession'} onChange={onChangeInput} minLength="10" required/>
                     </InputForm>
                     <InputForm>
                           <label>Explicação</label>                           
                           <input type={'text'} placeholder="explique sua candidatura" value={form['applicationText']} name={'applicationText'} onChange={onChangeInput} minLength="30" required/>
  
                     </InputForm>
                     <InputForm>
                           <label>País</label>
                           <select onChange={onChangeInput} required value={form['country']} name={'country'} >
                                <option value="">Selecione seu país</option>
                                {countrys.map((country)=>{
                                   return  <option value={country.nome} key={country.id}>{country.nome}</option>
                                })} 
                                
                           </select>
                     </InputForm>
                     <InputForm>
                           <label>Viagem</label>
                           <select onChange={onChangeInput} required value={form['trip']} name={'trip'} >
                                <option value="">Selecione a Viagem</option>
                                {trips.map((trip)=>{
                                   return  <option value={trip.id} key={trip.id}>{trip.name}</option>
                                })}
                                
                           </select>
                     </InputForm>
                     <ButtonRegisterCandidate>Candidatar</ButtonRegisterCandidate>                
            </FormContainerCandidate>
            
        </Main>
        <Footer/>         
    </ContainerApplicationFormPage>
  );
}

export default ApplicationFormPage;
