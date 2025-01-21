import "../css/flights.css"
import { FaArrowRight } from "react-icons/fa";
import { RiFlightLandFill } from "react-icons/ri";
function Flights(){
    return(
        <>
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
    <div className="gapdiv"></div>
    <div className="flight-to-icom"> 
    <RiFlightLandFill />
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
<div className="btndiv">
<button className="select-btn">Select</button>
<div className="rightarrow-icon">
<FaArrowRight />

</div>
</div>
</div>
</section>
        </main>
</main>

        </>
    )
}
export default Flights;