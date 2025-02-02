import { PiArmchairLight } from "react-icons/pi";
import { RiArmchairFill } from "react-icons/ri";
import "../css/seats.css";
import "../css/dynamicform.css";
import DynamicForms from "./dynamicform";
import { useState, useEffect } from "react";
import { FaPerson } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Seats() {
    const navigate=useNavigate();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [seats, setSeats] = useState([]);
    const [data, setData] = useState([]);
    const [firstHalf, setFirstHalf] = useState([]);
    const [secondHalf, setSecondHalf] = useState([]);

    console.log(id);

    const fetchSeats = async () => {
        try {
            console.log("Fetching seats...");
            const response = await axios.post(`http://localhost:8000/flights/${id}`);
            
            if (response.status === 200) {
                setData(response.data.seats);
                setFirstHalf(response.data.seats.slice(0, 36));
                setSecondHalf(response.data.seats.slice(36, 72));
                setLoading(false); // Data is loaded
            }
        } catch (err) {
            console.error("Error fetching seats:", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSeats();
    }, [id]);

    console.log("first Data:", firstHalf);
    
    console.log("second Data:", secondHalf);

    const handleClick = (seatNumber) => {
        setSeats((prev) => 
            prev.includes(seatNumber) 
                ? prev.filter((seat) => seat !== seatNumber) 
                : [...prev, seatNumber]
        );
    };

    console.log("Selected Seats:", seats);

    return (
        <>
            <div className="totalSeats">
                <div className="totalSeats-child">
                    <FaPerson className="person" />
                    <p className="seatCount">{seats.length}</p>
                </div>
            </div>

            {loading ? (
                <div className="loading-container">
                    <p>Loading seats...</p>
                </div>
            ) : (
                <main className="seatcontainer">
                    <main className="seatContainer-child">
                        {/* First Section */}
                        <section className="seatsection1">
                            <div className="section1child">
                            {firstHalf.map((seat) => (
    <div className={`seatParent ${seats.includes(seat.seatId) ? "selected" : ""}`}>
        <div onClick={() => handleClick(seat.seatId)} className="seaticondiv">
            <p>{seat.seatNumber}</p>  {/* Rendering seatId */}
            <PiArmchairLight className="seaticon" />
        </div>
    </div>
))}

                            </div>
                        </section>

                        {/* Second Section */}
                        <section className="seatsection2">
                            <div className="section2child">
                            {secondHalf.map((seat) => (
    <div className={`seatParent ${seats.includes(seat.seatId) ? "selected" : ""}`}>
        <div onClick={() => handleClick(seat.seatId)} className="seaticondiv">
            <p>{seat.seatNumber}</p>  {/* Rendering seatId */}
            <PiArmchairLight className="seaticon" />
        </div>
    </div>
))}

                            </div>
                        </section>
                    </main>

<div className="addpersonbtn">
<button onClick={()=>navigate(`/auth/passengerinfo/${id}`,{state:seats})}>Add persons Info</button>

</div>
                    {/* Dynamic Form Placeholder */}
                    <div className="dynamicformparent">
                        {/* <DynamicForms /> */}
                    </div>

                </main>
            )}
        </>
    );
}

export default Seats;
