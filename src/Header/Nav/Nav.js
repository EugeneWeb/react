import './Nav.css'

function Nav(props) {

    return(
            <nav className="menu">
                <ul className="menu-list">
                    { props.data.map(item => <li key={item.text} className="menu-item"><a href={item.link} className="menu-link">{item.text}</a></li>) }
                </ul>
            </nav>
    )
}

export default Nav