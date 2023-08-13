import './Header.css'

import Nav from "./Nav/Nav"
import logo from "../logo.svg"


const navData = [
    {link:'#', text:'Link1'},
    {link:'#', text:'Link2'},
    {link:'#', text:'Link3'},
    {link:'#', text:'Link4'}
]

function Header() {
    return(
        <header className="header">
            <a href="#"><img src={logo} alt="Логотип компании" /></a>

            <Nav data={navData}/>
        </header>
    )
}

export default Header