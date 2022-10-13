import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const [menu, setMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    function toggleNav() {
        setMenu(!menu)
    }

    useEffect(()=> {
        function changeWidth() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return() => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    let showMoreNav = (screenWidth > 500 ?
        <div className='items' id="socials"><h1>More ▾</h1>
            <div className='dropdown-menu'>
                <li><a className='socialItems' target="_blank" onClick={toggleNav}><p>Try It</p></a></li>
                <li><a className='socialItems' target="_blank"><p>Testimonials</p></a></li>
                <li><a className='socialItems' target="_blank"><p>Blog</p></a></li>
            </div>
        </div>
        :
        <div id="smallMenu">
            <a className='socialItems' target="_blank"></a>
            <a className='socialItems' target="_blank"></a>
            <a className='socialItems' target="_blank"></a>
            <a className='socialItems' target="_blank" onClick={toggleNav}></a>
        </div>
        )

return (
    <div id="wholebar">
        <Link to="/" style={{ textDecoration: 'none'}}><h1 id="heading1">Clean Energy Hub</h1></Link>
    <nav>
        {(menu || screenWidth > 500 ) && (
        <ul className="list">
            <li className="items"><Link to="/Home" className="navroute" style={{ textDecoration: 'none'}} onClick={toggleNav}><h1 id="nav1">Home</h1></Link></li>
            <li className="items"><Link to="/Home" className="navroute" style={{ textDecoration: 'none'}} onClick={toggleNav}> <h1 id="nav2">About</h1></Link></li>
            <li className="items"><Link to="/Home" className="navroute" style={{ textDecoration: 'none'}} onClick={toggleNav}><h1 id="nav4">Features</h1></Link></li>
            {showMoreNav}
        </ul>
        )}
    </nav>
    </div>
)
}

export default Navbar