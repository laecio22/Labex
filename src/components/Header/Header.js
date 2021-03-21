import {ContainerHeader, ImageLogo} from './styled'
import logo from '../../assets/images/espaco.jpg'
import {useRedirectPage} from '../../hooks/useRedirectPage'

function Header (props){        
    const [name, changePage] = useRedirectPage(props.titleRedirect, props.redirectPage)      
    return (
        <ContainerHeader>
            <ImageLogo src={logo} alt="logo do  site da labeX"/> 
            <h2 onClick={changePage}>{name}</h2>               
        </ContainerHeader>
    )
}

export default Header