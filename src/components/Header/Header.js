import {ContainerHeader} from './styled'
import {useRedirectPage} from '../../hooks/useRedirectPage'

function Header (props){        
    const [name, changePage,secondName, otherChangePage] = useRedirectPage(props.titleRedirect, props.redirectPage, 
                   props.titleSecondary,props.redirectPageSecondary
          )    
   
    return (
        <ContainerHeader>           
            <h2 onClick={changePage}>{name}</h2>               
            <h2 onClick={otherChangePage}>{secondName}</h2>
        </ContainerHeader>
    )
}

export default Header