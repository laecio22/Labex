import styled from 'styled-components'

export const ContainerLoginPage = styled.div`
       width: 100vw;
       height:100vh;          
`
export const  FormContainer = styled.form`       
       max-width: 100vw;
       height:100vh;
       border:1px solid #000;
      // margin: 120px auto; 
       display: flex;
       justify-content: center;
       align-items:center;
       flex-direction: column;
       flex-wrap:wrap;
       background-color:#fff;
       
       h1{
           text-align:center;
           padding:30px 0;   
       }       
`    
export const ContainerFormLogin = styled.div`
       display:grid;
       grid-template-columns:1fr 1fr;
       
` 
export const InputForm = styled.div`
       margin-bottom: 30px;
       font-size: 22px;

       label {
              margin-right: 30px;
       }

       input {
              font-size: 19px;
              width: 260px;
              height: 30px;              
       }
`
export const ButtonLogin = styled.button`
       width: 100px;
       height:30px;
       margin-top: 20px;
       font-size: 19px;
`
export const TextBlock = styled.div`
       background-color:#016734;
       color:#fff;
       font-size:32px;
       display:flex;
       flex-direction: column;
       justify-content:center;
       align-items:center;

`



