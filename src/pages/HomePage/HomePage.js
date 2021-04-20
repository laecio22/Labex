import React from 'react'
import { ContainerHomePage, ContainerDescription, ContainerAbout } from './styled'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import TitlePrincipal from '../../components/TitlePrincipal/TitlePrincipal'
import { goToLoginPage, goToListTripsPage } from '../../routers/Coordinator'

function HomePage() {

     const history = useHistory()

     return (
          <ContainerHomePage>
               <Header redirectPage={() => goToListTripsPage(history)}
                    titleRedirect={"Área Pública"}
                    titleSecondary={"Área Privada"}
                    redirectPageSecondary={() => goToLoginPage(history)} />
               <Main>
                    <TitlePrincipal>
                         <h1>Labex</h1>
                         <div>Viaje com conforto  e segurança para qualquer planeta do universo conosco</div>
                    </TitlePrincipal>
                    <ContainerDescription>
                         <h3>Descrição</h3>
                         <p>A LabeX foi fundada em 2021, com o objetivo principal  de permitir que as pessoas realizem
                         seu sonho de conhecer outros planetas do nosso imenso universo.</p>
                         <p>Gerenciamos e organizamos suas viagens então venha nos conhecer, 
                         temos a função de proporcionar esse seu sonho  com maior tranquilidade e conforto.  
                         </p>
                         

                    </ ContainerDescription>
                    <ContainerAbout>
                         <h3>Fale Conosco</h3>
                         <p>Telefone: (000)99999-9999</p>
                         <p>Email:labex@gmail.com</p>
                    </ContainerAbout>
               </Main>
               <Footer />
          </ContainerHomePage>
     );
}

export default HomePage;
