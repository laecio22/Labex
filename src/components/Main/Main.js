import styled from 'styled-components'
import imagemFundo from '../../assets/images/viagemespacial02.jpg'

const Main = styled.div`
       background-color:#fff;      
       width:100vw;
       min-height:100vh;
       background-image:url(${imagemFundo});
       background-repeat: no-repeat;
       background-size:cover;
       color:white; 
       display:flex;
       flex-direction:column;
       align-items:center;    
     
`
export default Main
