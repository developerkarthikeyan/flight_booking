import { FaRegCircle } from "react-icons/fa";
import "../css/flightSearch.css"
import { IoLocationOutline } from "react-icons/io5";
import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import DatePicker from "react-datepicker";
import arrowicon from "../assets/708900d1b6b17cae80ea7112b6597a0e.jpg"
import { FaArrowLeftLong } from "react-icons/fa6";
function FlightSearch() {
    const[ispopupOpen,setpopupOpen]=useState(false);
    const handleinput=()=>{
        setpopupOpen(true);

    }
    const handleTo=()=>{
        setpopupOpen(true);

    }

    return (
        <>
            <div className="container">
                <div className="section1">
                    <button className="flights">Fligths</button>
                    <button className="hotels">Hotels</button>
                </div>

                <div className="searchdiv">
                    <p>Create a Multi-city Route </p>
                    <div className="inputsdiv">
                        <div className="fromdiv">
                            <input onClick={handleinput} placeholder="from" className="input1" type="text" />
                         <div className="from-icon">
<FaRegCircle/>
                         </div>

                        </div>
                        <div className="todiv">
                            <input onClick={handleTo}  placeholder="to" className="input2" type="text" />
<div className="toicon">
<IoLocationOutline />
</div>
                        </div>
                        <div className="datediv">
                            <div className="calendar">
     
                            <input placeholder="" className="date" type="date" />

<div className="date-icon">

<CiCalendarDate />

</div>
                            </div>
                            <hr></hr>
                            <div className="classtype">
                                <h1>Ault</h1>
                            </div>
                        </div>


                    </div>
      
                </div>
                <div className="searchbutton">
<button className="searchbtn">Search</button>

</div>
                
                <div>
                    
                </div>

            </div>
{
ispopupOpen &&
<div className="popUp"> 
<div className="popupheader">

<div onClick={()=>setpopupOpen(false)}  className="exiticon">
<FaArrowLeftLong />
</div>

<p className="popupheading">choose Where to depart</p>

</div>
<div className="inputsectoin">
    
    
    <input placeholder=" from"className="popupinput" type="text" />
    </div>
<div className="line"></div>
<div className="fromairports">
<ul>
    <li>Salem</li>
    <li>chennai</li>
    <li>newyork</li>
    <li>loavegas</li>

</ul>
</div>

    </div>
}
        </>
    )
}
export default FlightSearch;