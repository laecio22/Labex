import styled from 'styled-components'

export const ContainerApplicationFormPage = styled.div`
       width: 100vw;
       height:100vh;      
`

export const  FormContainerCandidate = styled.form`       
       max-width: 40vw;
       height:65rem;
       border:1px solid #000;
       margin: 8rem auto; 
       display: flex;
       justify-content: flex-start;
       align-items:center;
       flex-direction: column;
       flex-wrap:wrap;
       background-color:rgba(134,131,131,0.7);
       color:#000;
       
       h1{
           text-align:center;
           padding:3rem  0;  
           font-size:3.8rem; 
           color:#fff;
       }   

        input,select {
              font-size: 1.9rem;
              width: 24rem;
              height: 3rem; 
              margin-right: 10rem;             
      }    
`      

export const InputForm = styled.div`
       display:grid;
       grid-template-columns: 1fr 1fr;
       justify-items:flex-end;
       //margin-right: 4rem;
       //margin-bottom: 3rem;
       margin:1.5rem auto;
       font-size: 2.2rem;      

       label {
              margin-right: 2rem;
       }

       
       
`

export const ButtonRegisterCandidate = styled.button`
       width: 17rem;
       height:3.8rem;
       margin-top: 5rem;
       font-size: 1.9rem;
       border-radius: 8px;
       background-color:#1EAC25;
       color:#fff;
       

`




