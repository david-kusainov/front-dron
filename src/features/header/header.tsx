import { LoginButton } from '@widgets/login-button/ui'
import logo from '../../public/logo.svg'
import './styles.css'
import { MenuButton } from '@widgets/menu-button/ui'

export const Header = () => {
    return (
        <div className='header'>
            <div>
              <MenuButton/>
              <img src={logo} style={{marginLeft:'35px'}}></img>
            </div>
            <LoginButton/>
        </div>
    )
  }