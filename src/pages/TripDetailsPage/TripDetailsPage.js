import React,{useState, useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {ContainerTripDetailsPage, ContainerTrips, ItemTrip, Trip, ButtonDetailTrip,CardItem,Detail,ButtonDecide} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {logout, showTripDetails} from '../../routers/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import {BASE_URL, header} from '../../constants/urls'
import TitlePrincipal from '../../components/TitlePrincipal/TitlePrincipal'

function TripDetailsPage() {
  const history = useHistory()
  const[trips, setTrips] = useState([])  
  const[travel, setTravel] = useState({})  
  const pathParams = useParams()
  const token = localStorage.getItem('token')

  const getTrips = () =>{
        axios.get(`${BASE_URL}/trips`).then((response)=>{
          setTrips(response.data.trips)          
      }).catch((error)=>{
          alert(error)
      })      
  } 

  useEffect(()=>{      
       getTrips()      
  },[]) 

  useEffect(()=>{
    axios.get(`${BASE_URL}/trip/${pathParams.idTrip}`, header(token)).then((response)=>{
      setTravel(response.data.trip)      
    }).catch((error)=>{
        alert(error)
    })     
  },[pathParams.idTrip,token])

  const showTrip = (idTravel) =>{     
        showTripDetails(history, idTravel)        
  }

  useProtectedPage() 

  const decideApplication = (approve, idCandidate)=>{
         const body = {
             approve
         }
         axios.put(`${BASE_URL}/trips/${pathParams.idTrip}/candidates/${idCandidate}/decide`,body,header(token))
         .then(()=>{
               
              axios.get(`${BASE_URL}/trip/${pathParams.idTrip}`, header(token)).then((response)=>{
                setTravel(response.data.trip)      
              }).catch((error)=>{
                  alert(error)
              })              
         })
  }

  const rejectCandidate = (idCandidate)=>{
       decideApplication(false, idCandidate)
  }

  const approveCandidate = (idCandidate) =>{
        decideApplication(true,idCandidate)
  }

  return (
    <ContainerTripDetailsPage> 
       <Header redirectPage={()=>logout(history)} titleRedirect={"Logout"}/>  
       <Main>
            <TitlePrincipal>
              <h1>Lista Viagens</h1>
            </TitlePrincipal>
            <ContainerTrips> 
                            
                {trips.map((trip)=>{
                  return <ItemTrip key={trip.id}>                              
                              <p>Viagem</p>
                              <p>{trip.name}</p>
                              <ButtonDetailTrip onClick={()=>showTrip(trip.id) }>Detalhar Viagem</ButtonDetailTrip> 
                              {travel.id === trip.id? 
                                      <Trip>
                                          <h3>Detalhes</h3> 
                                          <CardItem>
                                              <Detail><span>nome:</span> {travel.name}</Detail>
                                              <Detail><span>planeta:</span> {travel.planet} </Detail>
                                              <Detail><span>descrição:</span> {travel.description}</Detail>
                                              <Detail><span>data:</span> {travel.date}</Detail>
                                              <Detail><span>duração dias:</span> {travel.durationInDays}</Detail>
                                          </CardItem>
                                          <h3>Candidatos </h3>
                                          {travel.candidates.map((trip)=>{
                                              return (                                                
                                                    <CardItem key={trip.id}>                                                    
                                                          <Detail><span>nome:</span> {trip.name}</Detail>
                                                          <Detail><span>idade:</span> {trip.age}</Detail>
                                                          <Detail><span>país:</span> {trip.country}</Detail>
                                                          <Detail><span>profissão:</span> {trip.profession}</Detail>
                                                          <Detail><span>explicação:</span> {trip.applicationText}</Detail>
                                                          <ButtonDecide onClick={()=>approveCandidate(trip.id)}>Aprovar</ButtonDecide>
                                                          <ButtonDecide onClick={()=>rejectCandidate(trip.id)}>Rejeitar</ButtonDecide>
                                                    </CardItem>
                                              )
                                          })}
                                          <h3>Aprovados</h3>
                                          {travel.approved.map((trip)=>{
                                              return (
                                                <CardItem key={trip.id}>                                                    
                                                      <Detail><span>nome:</span> {trip.name}</Detail>
                                                      <Detail><span>idade:</span> {trip.age}</Detail>
                                                      <Detail><span>país:</span> {trip.country}</Detail>
                                                      <Detail><span>profissão:</span>{trip.profession}</Detail>                  
                                                </CardItem>)                                          
                                          })}    
                                       </Trip> 
                                       : <div></div>  
                              }       
                                                           
                          </ItemTrip>
                })}
            </ContainerTrips>
       </Main>
       <Footer/>      
    </ContainerTripDetailsPage>
  );
}

export default TripDetailsPage;
