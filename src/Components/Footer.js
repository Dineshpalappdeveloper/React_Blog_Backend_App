import React from 'react'
import facebook from "../logo/facebook.png"
import intagram from "../logo/instagram.png"
import twitter from "../logo/twitter.png"
import youtube from "../logo/youtube.png"
import "./Footer.css"
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const nav = useNavigate();
    return (
        <div className='footerContainner'>
            <div >
                <h2 className='about'>AboutUs</h2>
                <hr className='footerHr' />
                <span className='blo-des'>This  is a simple blog app made by Dinesh kumar
                    in this blog i am trying to show abouts my favorites foods palces etc
                </span>
                <div className='displayFt'>
                    <img className='footerLogo' alt='not found' src={facebook} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={intagram} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={twitter} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={youtube} height={50} width={50} />
                </div>
            </div>
            <div>
                <h2 className='about1'>Usefull Links</h2>
                <hr className='footerHr1' />
                <span className='links1' onClick={() => {
                    nav("/")
                }}>Home</span>
                <span className='links1' onClick={() => {
                    nav("/fitness")
                }}>Bihar Toriusm</span>
                <span className='links1' onClick={() => {
                    nav("/technology")
                }}>Technology</span>
                <span className='links1'>Privacy Policy</span>

            </div> <div>
                <h2 className='about1'>Ours  Services</h2>
                <hr className='footerHr1' />
                <span className='links1'>Web Deveploment</span>
                <span className='links1'>App Deveploment</span>
                <span className='links1'>Graphic Design</span>

                <span className='links1'>Web Design</span>
            </div> <div>
                <h2 className='about1'> Contact:- </h2>
                <hr className='footerHr1' />
                <span>dinesh_palvansi</span>

                <span>Your Querys or Questions</span>

                <input type='text' placeholder='Write here' className='question' />
                <button className='qsend'>Send</button>
            </div>
        </div>
    )
}

export default Footer
