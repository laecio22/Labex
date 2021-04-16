import  styled  from 'styled-components'

export const ContainerHeader = styled.div`
       height:70px;
       display:flex;
       justify-content: space-between;
       align-items: center;
       border: 1px solid #000;
       background-color: #50B6E2;       
       max-width: 100vw;       

       h2{
           margin-right: 30px;
           margin-left:20px;
           padding:10px;
           color:#fff;
           transition:0.5s;
           :hover {
               background-color:#433E3F;
               
           }     
       }  
      
`

export const ImageLogo = styled.img`
       height:55px;
       width:70px;
       margin-left: 20px;
`