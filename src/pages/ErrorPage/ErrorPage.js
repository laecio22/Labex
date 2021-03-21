import React from 'react'
import {ContainerErrorPage} from './styled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'

function ErrorPage() {  
  return (
    <ContainerErrorPage>
         <Header/>
         <Main>
            <h2>Página não encontrada</h2>
         </Main>
         <Footer/>
    </ContainerErrorPage>
  );
}

export default ErrorPage;
