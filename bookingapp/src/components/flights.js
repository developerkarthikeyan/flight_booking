import "../css/flights.css"
import { FaArrowRight } from "react-icons/fa";
import { RiFlightLandFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { CgAirplane } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Flights(){
    const navigate=useNavigate()
    const location=useLocation();
    const [data,setdata]=useState([]);
    const state=location.state || {};
    console.log("state from home page",state)
    const handleSearch=async()=>{
try{
    // const request=await axios.post("http://localhost:8000/searchFligths",state)

}catch(err){
    console.log(err)
}
    }
    const handleSelect=()=>{
        navigate(`/seats/${11}`)
    }
    useEffect(()=>{
handleSearch();

    },[state])
    return(
        <>
{
Array.from({length:10}).map((index)=>{

return(
<main className="parent-container">

        <main className="flight-container">
        <section className="filghtdetali1">
<div className="flight-namediv">
    <div className="airline-namediv">
    <img className="flight-img" src="https://i.pinimg.com/originals/69/97/80/699780710235c0ee61a913328abf928e.png"/>
<p className="airline-name">AirIndia</p>
    </div>
</div>

<div className="flight-timingdiv">
    <div className="from-time">
<p>17:40</p>
<p>SXR</p>
    </div>
    <div className="middlediv">
        <div className="duration">
            <p>2hrs</p>
        </div>
    <div className="gapdiv"></div>
    <div className="flight-to-icom"> 
    <CgAirplane />
</div>
    </div>


<div className="to-time">
    <p> 03:50</p>
<p>MAA</p>
</div>
</div>
        </section>

<div className="middleline"></div>
<section className="section2">
   
<div className="pricediv">
<p className="price">deals from 10,6000</p>
<div className="btndiv" onClick={handleSelect}>
<button className="select-btn" >Select</button>
<div className="rightarrow-icon">
<FaArrowRight />

</div>
</div>
</div>
</section>
        </main>
</main>
)
})
    
        }        
        </>

    )
}
export default Flights;