import { FaRegCircle } from "react-icons/fa";
import "../css/flightSearch.css"
import { IoLocationOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import DatePicker from "react-datepicker";
import arrowicon from "../assets/708900d1b6b17cae80ea7112b6597a0e.jpg"
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
function FlightSearch() {
    const navigate=useNavigate();
    const[ispopupOpen,setpopupOpen]=useState(false);
    const[airPorts,setairPorts]=useState([]);
    const[search,setsearch]=useState("");
    const[isfrom,setisfrom]=useState(false);
    const[isto,setisto]=useState(false);
    const[fromTo,setFromTo]=useState({
        from:"",
        to:"",
        date:""
    })
    console.log(fromTo)
    const handlefrom=()=>{
        setpopupOpen(true);
setisfrom(true);

    } 
    console.log(isfrom)

    const handleTo=()=>{
        setpopupOpen(true);
        setisfrom(false);
    }

const handleSearch=async()=>{
console.log(typeof(search))
    if (search === "") {
        // Clear the airports data if search is empty
        setairPorts([]);
        setFromTo(null);
        console.log(fromTo)
        return; 
    }
    if(String(search).trim()!=""){
        const request=await fetch(`http://localhost:8000/search-ports?query=${search}`)
    
        const data=await request?.json();
        if(request.status==200){
            setairPorts(data);
            console.log(search)
        }
    
    }

}    
useEffect(()=>{
    handleSearch();
},[search])
const handleSubmit=async()=>{
    // const request=await axios.post("http://localhost:8000/searchFligths",fromTo)
    navigate("/flights",{state:fromTo})
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
                            <input  value={fromTo?.from || ''}  onClick={handlefrom} placeholder="from" className="input1" type="text" />
                         <div className="from-icon">
<FaRegCircle/>
                         </div>

                        </div>
                        <div className="todiv">
                            <input value={fromTo?.to || ''}  onClick={handleTo}  placeholder="to" className="input2" type="text" />
<div className="toicon">
<IoLocationOutline />
</div>
                        </div>
                        <div className="datediv">
                            <div className="calendar">
     
                            <input   onChange={(e) =>
    setFromTo((prev) => ({
      ...prev,
      date: e.target.value,
    }))
  } placeholder="" className="date" type="date" />

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
<button onClick={handleSubmit} className="searchbtn">Search</button>

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

</div>{
   isfrom?(

<div className="inputsectoin">
    
    <input onChange={(e)=>setsearch(e.target.value)} placeholder=" from"className="popupinput" type="text"  />
    </div>):(

        
<div className="inputsectoin">
    
    <input onChange={(e)=>setsearch(e.target.value)} placeholder=" from"className="popupinput" type="text"  />
    </div>
    )
}
<div className="line"></div>
<div className="fromairports">
<ul>
    
    {Array.isArray(airPorts) &&
        airPorts.length > 0 &&
        airPorts.map((data, index) => (
          <li  className="airpots" onClick={() => {
            setFromTo((prev) => (isfrom?{ ...prev, from: data.state }:{ ...prev, to: data.state }));
            setpopupOpen(false) 
            setairPorts(null);
          }}key={index}>{data.name} ({data.state})</li>
        ))}
    
    
    
</ul>
</div>

    </div>
}
        </>
    )
}
export default FlightSearch;