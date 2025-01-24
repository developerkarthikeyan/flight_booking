import "../css/dynamicform.css"
import{useForm,useFieldArray,Controller} from "react-hook-form";
import React, { useState } from "react";

const DynamicForms = () => {
  const [count, setCount] = useState(2); // Number of forms
  const [formData, setFormData] = useState([{ name: "", age: "" }]); // Initial form data

  // Handle count change
  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
    setFormData((prevData) =>
      Array.from({ length: newCount }, (_, index) => prevData[index] || { name: "", age: "" })
    );
  };

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(formData)
  };

  const handleSelect=(event)=>{
event.taget.classList.add("select")
  }
  return (
    <div className="passengerinfocontainer">
 
      <form onSubmit={handleSubmit} >
        <div >

        {Array.from({ length: count }).map((_,index) => (
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

            <label>
              Age:
            </label>

              <input
                type="number"
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                required
              />
              
              </div>
<div className="genderParent">

            <label>
              gender
            </label>
             
             <div className="genderSections">
              <section className="genderSection-male" onMouseEnter={handleSelect}>
<p>Male</p>
              </section>
              <section className="genderSection-female">
<p>Female</p>
</section>

             </div>
            </div>
</div>

           
<div className="from-div">

<label>state</label>

<input
                type="text"
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                required
              />


<label>phN0</label>

<input
                type="text"
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                required
              />



</div>








        

          </div>
        ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default DynamicForms;
