import "../css/states.css";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import indianStatesAndUTs from "../states/states.js";
import { useEffect, useState } from "react";
function StateSearch({handlestates}){

    console.log("parent",handlestates)
const [result,setresult]=useState([]);
const[select,setselect]=useState();
const[iselected,setisSelected]=useState(false);
useEffect(()=>{
setresult(indianStatesAndUTs.slice(0,6));
},[])
const handleinput=(e)=>{
console.log(e.target.value);
setresult(indianStatesAndUTs.filter((data) => 
    data.toLowerCase().includes(e.target.value?e.target.value:"t".toLowerCase())  ).slice(0, 6));
}

const handleselect=(data)=>{
    console.log(data);
setisSelected(true)
setselect(data);
}

const passData=()=>{
    const data={state:select}
    handlestates(select,false);
}

console.log(select);
return(
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
<button onClick={passData}>Confirm</button>
</section>

    </div>    
    </>
)

}
export default StateSearch;