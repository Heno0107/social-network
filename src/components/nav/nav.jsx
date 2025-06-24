import logo from '../../assets/logo/social-logo.png'

import './nav.css'

export function Nav () {

    return (
        <nav>
            <img src={logo} alt="" className="nav-logo" />
            <button className="login">
                LOGIN
            </button>
        </nav>
    )
}