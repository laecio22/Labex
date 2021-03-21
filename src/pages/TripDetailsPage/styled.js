import styled from 'styled-components'

export const ContainerTripDetailsPage = styled.div`
        width: 100vw;
        height:100vh;       
`
export const ContainerTrips = styled.div`      
       display:grid;
       justify-items: center;
       
`
export const ItemTrip = styled.div`
      display:grid;
      grid-template-columns:  250px 250px 1fr  ;
      justify-items: center;   
      margin-top: 15px;   
  `  
export const Trip = styled.div`      
      grid-column: span 1 / 3;
      display:grid;

      h3{
         margin-top:5px; 
         text-align:center;    
      }

  `
export const ButtonDetailTrip = styled.button`
          background-color:#12DE3F;
          color:#fff;
  `
export const CardItem = styled.div`
          margin-top:10px;
          border:1px solid #000;  
    `
export const Detail = styled.div`
         span {
              font-weight:bold;
              margin:5px;   
         } 
` 
export const ButtonDecide = styled.button`
       margin-left:50px;
       margin-bottom:5px;
       height:20px;
       width:60px;
       background-color:#1290DE;
       color:#fff;
`

    
 
  
  
 


