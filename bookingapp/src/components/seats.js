import { PiArmchairLight } from "react-icons/pi";
import { RiArmchairFill } from "react-icons/ri";
import "../css/seats.css";
import "../css/dynamicform.css";
import DynamicForms from "./dynamicform";
function Seats(){
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];


const handleClick=(data)=>{
console.log(data);
}
    return(
        <>
        <main className="seatcontainer">

        <main className="seatContainer-child">
<section className="seatsection1"> 
    <div className="section1child">

{
                arr.map((data)=>{
 return (
    <div onClick={()=>handleClick(data)} className="seaticondiv">
    <PiArmchairLight className="seaticon" /> 

    </div>
)
})
}
    </div>
        
</section>

<section className="seatsection2"> 
<div className="section2child">
{
                arr.map((data)=>{
 return (
    <div className="seaticondiv">
    <PiArmchairLight className="seaticon" /> 

    </div>
)
})
}
</div>


</section>

        </main>
        <div className="dynamicformparent">
      <DynamicForms/>
            
        </div>
        </main>
      
        </>
    )
}
export default Seats;
{/* <RiArmchairFill /> */}
