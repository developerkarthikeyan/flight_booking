import "../css/register.css";
import "../css/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const[isloading,setLoading]=useState(false);

    const navigate=useNavigate();
    
    const [userData, setuserData] = useState({
        username: "",
        email: "",
        password: "" // Fixed the typo from "passowrd"
    });
  
    const showToast = (msg,status) => {
        if(status!=200){
        toast.error(msg);

        }
        else{
            toast.success(msg)
        }
        // You can also use toast.error(), toast.info(), or toast.warning() based on your needs
      };


    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted");
        console.log(userData);
        setLoading(true);
        try{
            const request = await axios.post("http://localhost:8000/register", userData, {
                withCredentials: true,
                validateStatus: function (status) {
                  // Accept all status codes
                  return true;
                }
              });

        console.log("hii")
            // onst response=await request.json();
            console.log(request.data)
            if(request.status==200){
                navigate("/login");
            }
            if(request.status==409){
showToast(request.data.message,request.status)
setLoading(false);
            }
        }catch(err){
            console.log(err)
        }

    }

    return (
        <>
           <ToastContainer />
            <form onSubmit={handleSubmit} className="parent flex justify-center">
                <div className="login">
                    <div className="heading">
                        <h1>Register</h1>
                    </div>
                    <div className="inputs">
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={(e) =>
                                setuserData((prevData) => ({
                                    ...prevData,
                                    username: e.target.value
                                }))
                            }
                            className="ip1"
                            placeholder="Enter your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={(e) =>
                                setuserData((prevData) => ({
                                    ...prevData,
                                    email: e.target.value
                                }))
                            }
                            className="ip1"
                            placeholder="Enter your Email"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={(e) =>
                                setuserData((prevData) => ({
                                    ...prevData,
                                    password: e.target.value
                                }))
                            }
                            className="ip2"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="btndiv">
                    <button disabled={isloading} className="btn" >
                    {isloading ?
        (
        <div className="loaderdiv">
        <div class="custom-loader"></div>

        </div>
             )     :
               <p>Signup</p>     
                }
                    </button> 
                    </div>
                    <div className="ordiv">
                        <div className="lf"></div>
                        <p className="ortext">
                            <Link to="/login">Go back to Login</Link>
                        </p>
                        <div className="lb"></div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;
