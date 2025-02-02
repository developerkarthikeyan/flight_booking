import "../css/dynamicform.css";
import StateSearch from "./stateSearch";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import indianStatesAndUTs from "../states/states.js";
import { useEffect, useState } from "react";import "../css/states.css"
import axios from "axios";
import { useLocation} from "react-router-dom";
const DynamicForms = () => {
  const{state}=useLocation();
  console.log("state is",state);
const[count,setCount]=useState(2);
const[formData,setFormData] =useState([
  {
    name:"",
    age:"",
   state:"" 
  }
])
const [result,setresult]=useState([]);
  const[select,setselect]=useState();
  const[iselected,setisSelected]=useState(false);
  const[ispopup,setispopup]=useState(false);
const[currIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
  setresult(indianStatesAndUTs.slice(0,6));
  },[])
  const handleinput=(e)=>{
  console.log(e.target.value);
  setresult(indianStatesAndUTs.filter((data) => 
      data.toLowerCase().includes(e.target.value?e.target.value:"t".toLowerCase())  ).slice(0, 6));
  }
  
 


  // Handle form submission


  const generateFormData = () => {
    // Generate the array of objects with length 'count'
    const newFormData = Array.from({ length: count }).map(() => ({
      name: "",
      age: "",
      gender:"",
      state: ""
    }));
  
    // Update the state with the new array of objects
    setFormData(newFormData);
  };
  
  // Call generateFormData() in an effect or event handler like this:
  useEffect(() => {
    generateFormData();
  }, [count]); 
  
 
const handleInputChange=(index,field,value)=>{
const update=[...formData];
update[index][field]=value;
setFormData(update);
}
console.log(formData)


 const passdata=()=>{
  setispopup(false);
const state=[...formData];
state[currIndex]["state"]=select;
setselect("");
  }

const handleselect=(data)=>{
  console.log(data);
setisSelected(true)
setselect(data);


}

const handleState=(index)=>{
setispopup(true);
setCurrentIndex(index);


}


//handle submit

const handleSubmit=async(e)=>{
e.preventDefault();
try{
  const request =await axios.post("http://localhost:8000/bookmyTicket",{
    formData,state
    
  })

}catch(err){

}

}


  return (
    <div className="passengerinfocontainer">
      {/* Optionally you can add an input here to change count */}
      {/* <input type="number" value={count} onChange={handleCountChange} /> */}

      <form onSubmit={handleSubmit}>
        {Array.from({ length: count }).map((_, index) => (
          <div className="karthi" key={index} style={{ marginBottom: "20px" }}>
            <h3>Person {index + 1}</h3>

            <div className="passengernamediv">
              <label>Name:</label>
              <input
                type="text"
                value={formData[index]?.name || ""}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                required
              />
            </div>

            <div className="age-gender-div">
              <div className="age">
                <label>Age:</label>
                <input
                  type="number"
                  value={formData[index]?.age || ""}
                  onChange={(e) => handleInputChange(index, "age", e.target.value)}
                  required
                />
              </div>

              <div className="genderParent">
                <label>Gender</label>
                <div className="genderSections" style={{ position: "relative" }}>
                  {/* Animated div that moves based on selected gender */}
                  <div
                    className="animate"
                    style={{
                      position: "absolute",
                      width: "50%",
                      height: "100%",
                      left: formData[index]?.gender === "male" ? "0%" : "50%",
                      backgroundColor: "red",
                      transition: "left 0.3s ease",
                      zIndex:-1,
                       pointerEvents: "none"
                    }}
          
                  ></div>

                  <section
                    className="genderSection-male"
                    onClick={() => handleInputChange(index, "gender","male")}
                  >
                    <p>Male</p>
                  </section>
                  <section
                    className="genderSection-female"
                    onClick={() => handleInputChange(index, "gender","female")}
                  >
                    <p>Female</p>
                  </section>
                </div>
              </div>
            </div>

            <div className="statediv">
              <div className="state">
                <label>State of Residence</label>
                <input
                  type="text"
                  value={formData[index]?.state || ""}
                onClick={()=>handleState(index)}
                  required
                />
              </div>
            </div>
          </div>
        ))}
<div className="bookmyTicket">
<button type="submit">BookMy Ticket</button>

</div>
      </form>
      <div className="seatcomponent">
    {
     ispopup  &&
 (
    <>

<div className="stateParent">
   <section className="firstsec">

<p>State</p>
<HiArchiveBoxXMark />
</section>

<section className="stateinput">
<input onChange={handleinput} type="text" />
<FaSearch className="searchIcon" />

</section>
<div className="hzline"></div>


<section className="statemap">

{result.map((data)=>{
return(
    <>
    <div className="result">
    <p>{data}</p>
<div onClick={()=>handleselect(data)}className={`checkbox ${select?.includes(data)? "selected" : ""}`}></div>
    </div>
    <div className="hline"></div>
    </>



)

})}

</section>




<section className="confirm">
<button onClick={passdata}>Confirm</button>
</section>

    </div>    
    </>
)
















    }
      </div>
    </div>


);
};

export default DynamicForms;
