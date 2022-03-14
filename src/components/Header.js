import React from 'react'
import  '../Styles/Header.css';
function Header() {
    return (
        <div className="header"
        onClick={()=> window.scroll(0,0)}
        >
            <span>🎬 ENTERTAINMENT HUB  🎥</span>
        </div>
    )
}

export default Header

