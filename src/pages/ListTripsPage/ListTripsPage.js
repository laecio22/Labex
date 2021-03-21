import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerListTripsPage, ContainerInfoTrips , ItemTrip, InfoTrip,ContainerTrips,Trip} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import {goToHome, goToForm} from '../../routers/Coordinator'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import TitlePrincipal from '../../components/TitlePrincipal/TitlePrincipal'

function ListTripsPage() {

  const[trips, setTrips] = useState([])
  const history = useHistory()

  useEffect(()=>{
      axios.get(`${BASE_URL}/trips`).then((response)=>{
          setTrips(response.data.trips)
      }).catch((error)=>{
          alert(error)
      })
  },[])  

  return (
        <ContainerListTripsPage>
            <Header redirectPage={()=> goToHome(history)} titleRedirect={"Home"}/>
            <Main>
                <h2 onClick ={()=>goToForm(history)}>Candidatar a Viagem</h2>
                <TitlePrincipal>
                    <h1>Lista de Viagens Disponíveis</h1>
                </TitlePrincipal>
                <ContainerTrips>
                        <ContainerInfoTrips>
                            <InfoTrip>Nome</InfoTrip>
                            <InfoTrip>Data</InfoTrip>
                            <InfoTrip>Planeta</InfoTrip>
                            <InfoTrip>Duração</InfoTrip>
                            <InfoTrip>Descrição</InfoTrip>                 
                        </ContainerInfoTrips>
                        {trips.map((trip)=>{
                            return <Trip>
                                        <ItemTrip>{trip.name}</ItemTrip>
                                        <ItemTrip>{trip.date}</ItemTrip>
                                        <ItemTrip>{trip.planet}</ItemTrip>
                                        <ItemTrip>{trip.durationInDays}</ItemTrip>
                                        <ItemTrip>{trip.description}</ItemTrip>                            
                                    </Trip>
                        })}                    
                </ContainerTrips>
            </Main>                
            <Footer/>         
        </ContainerListTripsPage>
  );
}

export default ListTripsPage;
