import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
const Header2 = () => {
    return (
        <div className='header2'>

            <NavLink to="/">


                <div className='main_header head2'>


                    <p>The</p>
                    <h1 className='siren'>Siren</h1>
                </div>

            </NavLink>
            <diV className="started">
                Get Started
            </diV>
        </div>
    )
}

export default Header2
