import styled from 'styled-components'

export const ContainerTripPage = styled.div`
       width: 100vw;
       height:100vh;  
          
`

export const  FormContainerTrip = styled.form`       
       max-width: 40vw;
       height:50rem;
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
           
           padding:3rem 0;  
           font-size:3rem; 
           color:#fff; 
           //margin-left:4rem;
       }  

       input, select {
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
       margin:1.5rem auto;
       font-size: 2.2rem;      

       label {
              margin-right: 3rem;
              
       }

       
`
export const ButtonRegisterTrip = styled.button`
       width: 17rem;
       height:3.8rem;
       margin-top: 3rem;
       margin-left:4rem;
       font-size: 1.9rem;
       border-radius: 8px;
       background-color:#1EAC25;
       color:#fff;
       
`






