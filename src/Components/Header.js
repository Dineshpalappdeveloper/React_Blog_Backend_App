import React, { useState } from 'react'
import "./Header.css"
import menulogo from "../logo/menu (1).png"
import closeLogo from "../logo/close.png"
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [count, setCount] = useState(1);
  return (
    <div className='header-nav header-nav1'>
      <div className='main_header'>

        <NavLink to="/">


          <div className='main_header subHeader'>


            <p className="the">The</p>
            <h1 className='siren'>Siren</h1>
          </div>

        </NavLink>

        <div className='hamber' onClick={() => {

          if (count % 2 === 0) {
            setCount(count + 1);
            console.log("before", count);

          } else {
            setCount(count - 1);

            console.log("after", count);
          }
        }}
        >
          {
            count === 0 ? <img src={closeLogo} height="40px" width="40px" alt='not found' /> :
              <img src={menulogo} height="40px" width="40px" alt='not found' />

          }

        </div>

      </div>

      <div >
        {
          count === 0 ? <div className="nav">

            <h4 >

              <NavLink to={"/"} className={"none"} >
                Home
              </NavLink>

            </h4>
            <h4>

              <NavLink to={"/bollywood"} className={"none"} >
                Bollywood
              </NavLink>

            </h4>
            <h4>

              <NavLink to={"/technology"} className={"none"} >
                Technology
              </NavLink>

            </h4>
            <h4>

              <NavLink to={"/hollywood"} className={"none"} >
                Hollywood
              </NavLink>

            </h4>
            <h4>

              <NavLink to={"/fitness"} className={"none"} >
                Bihar Tourism
              </NavLink>

            </h4>
            <h4>

              <NavLink to={"/food"} className={"none"} >
                Food
              </NavLink>

            </h4>



          </div> : ""
        }
      </div>
      <div>
        <div className="nav2">

          <h4 >

            <NavLink to={"/"} className={"none"} >
              Home
            </NavLink>

          </h4>
          <h4>

            <NavLink to={"/bollywood"} className={"none"} >
              Bollywood
            </NavLink>

          </h4>
          <h4>

            <NavLink to={"/technology"} className={"none"} >
              Technology
            </NavLink>

          </h4>
          <h4>

            <NavLink to={"/hollywood"} className={"none"} >
              Hollywood
            </NavLink>

          </h4>
          <h4>

            <NavLink to={"/fitness"} className={"none"} >
              Bihar Tourism
            </NavLink>

          </h4>
          <h4>

            <NavLink to={"/food"} className={"none"} >
              Food
            </NavLink>

          </h4>



        </div>
      </div>
    </div>
  )
}

export default Header
