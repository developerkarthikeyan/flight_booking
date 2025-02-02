
import "../css/booking.css"
import logo from "../assets/1000126862.png"
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react"
function Navbar(){
    const[isOpen,setOpen]=useState(false);
    console.log(isOpen)
    return(
        <>
<div className="nav">
<div className="name-logo">
    <img className="logo_nav" src={logo} />
    <p className="name">SkyScanner</p>
    </div>    
    <div className="account-hamburg">
        <div className="profile"> 
        <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" className="profile-img"/>
        </div>
<div  className="hamburg">
<Hamburger toggled={isOpen} toggle={setOpen}/>   
    
</div>
    </div>

</div>
<div className={isOpen?`active`:`inactive`}>

<div className={`hamburg_listdiv`}>
    <ul className="hamburg_items">
        <div className="hamburlogoDiv">
        <img className="hamburglogo" src={logo}/>
        <p className="hamName">SkyScanner</p>

        </div>

    <li>flights</li>
    <li>Hotels</li>
    <li>MY Booking</li>
    </ul>
</div>
</div>

        </>
    )
}
export default Navbar;