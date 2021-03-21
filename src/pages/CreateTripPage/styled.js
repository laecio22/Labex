import styled from 'styled-components'

export const ContainerTripPage = styled.div`
       width: 100vw;
       height:100vh;  
          
`

export const  FormContainerTrip = styled.form`       
       width: 35vw;
       height:500px;
       border:1px solid #000;
       margin: 80px auto; 
       display: flex;
       justify-content: flex-start;
       align-items:center;
       flex-direction: column;
       
       h1{
           text-align:center;
           padding:30px 0;   
       }       
`  
export const InputForm = styled.div`
       margin-bottom: 20px;
       font-size: 22px;

       label {
              margin-right: 10px;
       }

       input {
              font-size: 19px;
              width: 220px;
              height: 30px;              
       }       
`
export const ButtonRegisterTrip = styled.button`
       width: 100px;
       height:30px;
       margin-top: 20px;
       font-size: 19px;
`






