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
           padding:3rem 0; 
           font-size:3.8rem;  
       }       
`    
export const ContainerFormLogin = styled.div`
       display:grid;
       grid-template-columns:1fr 1fr;
       
` 
export const InputForm = styled.div`
       margin-bottom: 3rem;
       font-size: 2.2rem;

       label {
              margin-right: 3rem;
       }

       input {
              font-size: 1.9rem;
              width: 26rem;
              height: 3rem;              
       }
`
export const ButtonLogin = styled.button`
       width: 15rem;
       height:3rem;
       margin-top: 2rem;
       font-size: 1.9rem;
       background-color:#08297D;
       color:#fff;
       border-radius: 5rem;
       margin-left:3rem;
`
export const TextBlock = styled.div`
       background-color:#06B24E;
       color:#fff;
       font-size:3.2rem;
       display:flex;
       flex-direction: column;
       justify-content:center;
       align-items:center;

`



