import "../css/dynamicform.css"
import{useForm,useFieldArray,Controller} from "react-hook-form";
import React, { useState } from "react";

const DynamicForms = () => {
  const [count, setCount] = useState(1); // Number of forms
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

  return (
    <div className="passengerinfocontainer">
 
      <form onSubmit={handleSubmit} className="formcontainer">
        {Array.from({ length: count }).map((_,index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>Person {index + 1}</h3>
<div className="passengernamediv">


<label>
              Name:
              <input
                type="text"
                value={formData[index]?.name || ""}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                required
              />
            </label>


</div>

            <div className="age-gender-div">
            <label>
              Age:
            </label>

              <input
                type="number"
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                required
              />

            <label>
              gender
            </label>
              
              <input
                type="number"
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                required
              />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default DynamicForms;
